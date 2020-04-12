import { subscriptise, unsubscriptise } from '/js/utils/subscriptise';

import { arrowise } from '/js/utils/arrowise';
import { normalArrow, reversibleArrow, normalToReplace, reversibleToReplace } from '/js/info/arrows';

import * as ComNameGen from '/js/utils/comNameGen';

import { compoundLookup, getCompoundByName, getCompoundsByFormula } from '/js/info/compounds';
import { periodicLookup, getElementByName, getSymbolFromElement, getElementSymbolByName } from '/js/info/elements';

import * as MassOverlay from '/js/ui/eqMassOverlay';

export function titleCase(s) { // https://stackoverflow.com/a/22193094
  return s.split(' ')
      .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
      .join(' ');
}

export function evalExp(s) {
  let m = s.replace(/\s/g, '');

  while (/([0-9\.]+)[+\-/*]([0-9\.]+)/g.test(m)) {
    m = m.replace(/([0-9\.]+)\/([0-9\.]+)/g, (_, one, two) => parseFloat(one) / parseFloat(two));
    m = m.replace(/([0-9\.]+)\*([0-9\.]+)/g, (_, one, two) => parseFloat(one) * parseFloat(two));
    m = m.replace(/([0-9\.\-]+)([\+\-])([0-9\.]+)/g, (_, one, op, two) => op === '+' ? evalExp(one) + evalExp(two) : evalExp(one) - evalExp(two));
  }

  return parseFloat(m);
}

function calcPercents(masses, totalMass) {
  let percents = [];

  let massesKeys = Object.keys(masses);

  for (let i = 0; i < massesKeys.length; i++) {
    let k = massesKeys[i];

    percents.push({symbol: k, name: periodicLookup[k].name, percent: masses[k] / totalMass * 100, mass: masses[k]});
  }

  return percents.sort((a, b) => b.percent - a.percent);
}

function shownTotalMass(totalMass) {
  return totalMass === 0 ? '' : parseFloat(totalMass.toPrecision(5));
}

export function processEquation(formula) {
  MassOverlay.reset();

  let subformulae = formula.split(normalArrow).map((x) => x.replace(/ /g, '').split('+'));

  if (subformulae[0][0] === '') {
    return [false, ['', 'No reactants']];
  }

  if (subformulae[1][0] === '') {
    return [false, ['', 'No products']];
  }

  if (subformulae[0].includes('')) {
    return [false, ['', 'Empty reactant']];
  }

  if (subformulae[1].includes('')) {
    return [false, ['', 'Empty product']];
  }

  let results = subformulae.map((x) => x.map((y) => processFormula(y)));

  let totalMass = 0;
  let name = '';
  let masses = {};
  let i = 0;

  for (let r of results[0].concat(results[1])) {
    if (r[0] === false) {
      return r;
    }

    totalMass += r[1];

    for (let p of r[2]) {
      masses[p.symbol] = (masses[p.symbol] || 0) + p.mass;
    }

    name += r[0].split(' - ')[0];

    if (results[0].indexOf(r) === results[0].length - 1) {
      name += ` ${normalArrow} `;
    } else {
      if (results[1].indexOf(r) !== results[1].length - 1) {
        name += ` + `;
      }
    }

    MassOverlay.overlay(subformulae[0].concat(subformulae[1])[i], r[1]);

    i++;
  }

  let percents = calcPercents(masses, totalMass);

  return [name, shownTotalMass(totalMass), percents];
}

export function simplifyFormula(formula) {
  let symbols = formula.split(/(?=[A-Z\(\)])/);

  if (/[0-9]/.test(symbols[0][0])) {
    let big = parseFloat(symbols.shift());

    for (let i = 0; i < symbols.length; i++) {
      let split = symbols[i].split(/(?=[0-9])/);

      let exp = split.slice(1).join('');

      let num = evalExp(exp);
      num = isNaN(num) ? 1 : num;

      let final = (big * num);
      final = final === 1 ? '' : final;
      final = final.toString();

      symbols[i] = split[0] + final;
    }
  }

  let multi = [];
  let next = 0;

  let clone = [];

  for (let i = symbols.length - 1; i >= 0; i--) {
    if (symbols[i][0] === "(") {
      if (symbols[i] !== "(") {
        let num = evalExp(symbols[i].slice(1));
        num = isNaN(num) ? 1 : num;

        next = num - 1;
      }

      if (multi.length === 0) {
        return [false, ['', 'Brackets not ending']];
      }

      multi.pop();
    } else if (symbols[i][0] === ")") {
      let num = evalExp(symbols[i].slice(1));
      num = isNaN(num) ? 1 : num;

      multi.push(num);
    } else {
      let split = symbols[i].split(/(?=[0-9])/);

      let exp = split.slice(1).join('');

      let num = evalExp(exp);
      num = isNaN(num) ? 1 : num;

      let mul = multi.reduce((a, b) => a * b, 1);
      mul = mul === 0 ? 1 : mul;

      let final = (num * mul) + next;
      final = final === 1 ? '' : final;
      final = final.toString();

      clone.unshift(split[0] + final);

      next = 0;
    }
  }

  if (multi.length > 0) {
    return [false, ['', 'Brackets not opening']];
  }

  return [clone.slice(0), clone.join('')];
}

export function processFormula(formula, subprocess) {
  if (formula.includes(normalArrow)) {
    return processEquation(formula);
  }

  formula = unsubscriptise(formula);

  formula = formula.replace(/[^a-z0-9 \(\)+\-*/]/gmi, '');

  let reverseElement = getElementByName(formula);

  if (reverseElement !== undefined) {
    let reverseSymbol = getSymbolFromElement(reverseElement);

    // visualiseAtom(reverseElement.atomic);

    return [reverseSymbol, reverseElement.mass];
  }

  let reverseCompound = getCompoundByName(formula);

  if (reverseCompound !== undefined) {
    let processed = processFormula(reverseCompound.formula);

    return [`${subscriptise(reverseCompound.formula)} - ${processed[0].split(' - ')[1]}`, processed[1]];
  }

  formula = formula.replace(/ /g, '');

  let symbols = simplifyFormula(formula);

  if (symbols[0] == false) {
    return symbols[0] === false ? symbols : ['', ''];
  }

  symbols = symbols[0];

  let elements = [];
  let names = [];
  let masses = {};
  let totalMass = 0;
  let fail = false;

  for (let i = 0; i < symbols.length; i++) {
    let s = symbols[i];
    let n = 1;

    if (s.replace(/[^0-9]/gm, "").length > 0) {
      let numSplit = s.split(/(?=[0-9])/);

      s = numSplit.shift();

      n = parseFloat(numSplit.join(""));
    }

    for (let y = 0; y < n; y++) {
      let el = periodicLookup[s];

      if (el === undefined) { fail = s; break; }

      names.push(el.name);
      totalMass += el.mass;

      masses[s] = (masses[s] || 0) + el.mass;

      elements.push(el);
    }
  }

  if (fail) { return [false, [fail, ' is not recognised']]; }

  if (elements.length >= 10000) {
    return [false, [elements.length, ' is over the element processing limit']];
  }

  let percents = calcPercents(masses, totalMass);

  let lastName = "";
  let lastCount = 1;

  let namesCombined = [];
  for (let i = 0; i < names.length; i++) {
    let n = names[i];

    if (n.split(" ")[0] === lastName) {
      lastCount++;

      namesCombined.pop();

      namesCombined.push(`${n} (x${lastCount})`);
    } else {
      namesCombined.push(n);

      lastCount = 1;
    }

    lastName = n;
  }

  let namesFinal = namesCombined.join(', ');

  if (subprocess !== false) {
    let symbols = formula.split(/(?=[A-Z\(\)])/);
    let comFormula = formula;
    let comAmount = 1;

    if (/[0-9]/.test(symbols[0][0])) {
      comAmount = parseFloat(symbols.shift());

      comFormula = symbols.join('');
    }

    let compounds = getCompoundsByFormula(comFormula).map((e) => e.name);

    if (compounds.length > 0) {
      let extra = comAmount === 1 ? '' : ` (x${comAmount})`;

      namesFinal = `${compounds.join(' / ')}${extra} - ${namesFinal}`;
    }

    if (namesFinal === namesCombined.join(', ')) {
      let old = namesFinal;

      namesFinal = ComNameGen.generate(old, elements[0]);

      if (old !== namesFinal) {
        namesFinal = `${namesFinal}* - ${old}`;
      } else {
        if (comFormula !== formula) {
          let processWithoutNumPrefix = processFormula(comFormula)[0];
          let gen = ComNameGen.generate(processWithoutNumPrefix);

          if (processWithoutNumPrefix !== gen) {
            namesFinal = `${gen.split(' - ')[0]} (x${comAmount}) - ${old}`;
          }
        }
      }
    }
  }

  namesFinal = namesFinal === [''] ? '' : namesFinal;

  /*if (namesFinal === namesCombined.join(', ') && namesFinal.replace(/[^,]/g, "").length !== 0) {
    namesFinal = '';
  }*/

  return [namesFinal, shownTotalMass(totalMass), percents];
}