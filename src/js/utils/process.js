import { subscriptise, unsubscriptise } from '/js/utils/subscriptise';

import * as ComNameGen from '/js/utils/comNameGen';

import { compoundLookup, getCompoundByName, getCompoundsByFormula } from '/js/info/compounds';
import { periodicLookup, getElementByName, getSymbolFromElement, getElementSymbolByName } from '/js/info/elements';

export function titleCase(s) { // https://stackoverflow.com/a/22193094
  return s.split(' ')
      .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
      .join(' ');
}

export function evalExp(s) {
  let m = s.replace(/\s/g, '').match(/[+\-]?([0-9\.]+)/g) || [];

  if (m.length < 1) {
    return NaN;
  }

  return m.reduce(function(sum, value) {
    return parseFloat(sum) + parseFloat(value);
  });
}

export function simplifyFormula(formula) {
  let symbols = formula.split(/(?=[A-Z\(\)])/);

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
  formula = unsubscriptise(formula);

  formula = formula.replace(/[^a-z0-9 \(\)\+\-]/gmi, '');

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

  if (fail) { return [false, [fail, ' is not recongised']]; }

  if (elements.length >= 10000) {
    return [false, [elements.length, ' is over the element processing limit']];
  }

  let percents = [];

  let massesKeys = Object.keys(masses);

  for (let i = 0; i < massesKeys.length; i++) {
    let k = massesKeys[i];

    percents.push({symbol: k, name: periodicLookup[k].name, percent: masses[k] / totalMass * 100, mass: masses[k]});;
  }

  percents = percents.sort((a, b) => b.percent - a.percent);

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
    let compounds = getCompoundsByFormula(formula).map((e) => e.name);

    if (compounds.length > 0) {
      namesFinal = `${compounds.join(' / ')} - ${namesFinal}`;
    }

    /*for (let i = 0; i < compoundLookup.length; i++) {
      let p = processFormula(compoundLookup[i].formula, false);

      if (namesFinal === p[0]) {
        namesFinal = `${compoundLookup[i].formula} - ${namesFinal}`;
        break;
      }
    }*/

    if (namesFinal === namesCombined.join(', ')) {
      let old = namesFinal;

      namesFinal = ComNameGen.generate(old, elements[0]);

      if (old !== namesFinal) {
        namesFinal = `${namesFinal}* - ${old}`;
      }
    }
  }

  namesFinal = namesFinal === [''] ? '' : namesFinal;

  /*if (namesFinal === namesCombined.join(', ') && namesFinal.replace(/[^,]/g, "").length !== 0) {
    namesFinal = '';
  }*/

  return [namesFinal, totalMass === 0 ? '' : parseFloat(totalMass.toPrecision(5)), percents];
}