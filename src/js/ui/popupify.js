import { titleCase, evalExp, simplifyFormula, processFormula } from '/js/utils/process';
import { subscriptise, unsubscriptise } from '/js/utils/subscriptise';

import { getCharPos } from '/js/ui/formula';

import { compoundLookup, getCompoundByName, getCompoundsByFormula } from '/js/info/compounds';
import { periodicLookup, getElementByName, getSymbolFromElement, getElementSymbolByName } from '/js/info/elements';
import * as Pubchem from '/js/api/pubchem';

import { normalArrow, reversibleArrow, normalToReplace, reversibleToReplace } from '/js/info/arrows';

let oldModelSrc, oldModelLabel;

export function popupify(el) {
  el.onmouseleave = function() {
    document.getElementById('popup').className = '';

    let value = document.getElementById('formula').value;

    let result = processFormula(value);

    let body = result[0];

    let revCompound = getCompoundByName(value);

    if (body !== undefined && body !== '' && el.parentNode.innerText.indexOf('/') === -1) {
      document.getElementById('model-image').src = oldModelSrc;
      document.getElementById('model-label').innerText = oldModelLabel;
    }

    highlight.style.display = 'none';
  };

  el.onmouseenter = function() {
    oldModelSrc = document.getElementById('model-image').src;
    oldModelSrc = oldModelSrc === location.href ? '' : oldModelSrc;

    oldModelLabel = document.getElementById('model-label').innerText;

    document.getElementById('popup').className = 'show';
    document.getElementById('popup').innerHTML = '';

    let num = 1;
    let name = unsubscriptise(el.innerText).replace(',', '').replace(' /', '').replace('*', '').replace(' + ', '').replace(` ${normalArrow} `, '').replace(/[0-9]{1,}/g, (_) => { num = _; return ''; }).trim();

    if (name.indexOf('(') !== -1) {
      name = name.split(' ')[0];
    }

    let title = document.createElement('div');
    title.id = 'popup-title';
    title.innerText = num !== 1 ? `${name} (x${num})` : name;

    document.getElementById('popup').appendChild(title);

    let formula = undefined;

    let element = getElementByName(name);
    element = element === undefined ? periodicLookup[name] : element;

    let rows = [];

    if (element !== undefined) {
      formula = subscriptise(`${getSymbolFromElement(element)}${num !== 1 ? num.toString() : ''}`);
      rows = [['Symbol', formula], ['Mass', element.mass * num], ['Atomic', element.atomic], ['Group', element.group], ['Period', element.period], ['Phase (STP)', element.state], ['Desc', element.desc]];

      formula = unsubscriptise(formula).replace(/[0-9]/g, '');
    }

    let compound = getCompoundByName(name);

    if (compound !== undefined) {
      formula = (num !== 1 ? num.toString() : '') + subscriptise(compound.formula);
      rows = [['Formula', formula], ['Mass', processFormula(compound.formula)[1] * num]];

      Pubchem.setImageFromName(name);

      formula = unsubscriptise(formula);
    }

    for (let x = 0; x < rows.length; x++) {
      let row = document.createElement('div');
      row.className = 'row';

      let rowLeft = document.createElement('div');
      rowLeft.className = 'row-left';
      rowLeft.innerText = rows[x][0];

      let rowRight = document.createElement('div');
      rowRight.className = 'row-right';
      rowRight.innerText = rows[x][1] || '?';

      row.appendChild(rowLeft);
      row.appendChild(rowRight);

      document.getElementById('popup').appendChild(row);
    }

    if (formula !== undefined) {
      let {indexStart, indexEnd} = getFormulaRange(`${formula}`, parseInt(el.id.replace('element-', '')));

      let posStart = getCharPos(indexStart);
      let posEnd = getCharPos(indexEnd);

      let amount = indexEnd - indexStart;

      let width = posStart.width;
      width += amount === 0 ? 0 : posEnd.width;

      if (amount > 1) {
        for (let i = indexStart + 1; i < indexEnd; i++) {
          width += getCharPos(i).width;
        }
      }

      let highlight = document.getElementById('highlight');
      highlight.style.width = `${width}px`;
      highlight.style.left = `${posStart.x}px`;
      highlight.style.top = `${posStart.y + 15}px`;
      highlight.style.display = 'block';
    }
  };
}

export function getFormulaRange(formula, segmentNum) {
  formula = unsubscriptise(formula);

  let v = unsubscriptise(document.getElementById('formula').value);

  let segments = v.replace(' +', 'x+').replace(' →', 'x→').split(' ');

  let segmentsBefore = segments.splice(0, segmentNum);
  let segmentStartIndex = segmentsBefore.join('').length;

  let indexStart = v.indexOf(formula, segmentStartIndex);
  let indexEnd = indexStart + formula.length - 1;

  return {indexStart, indexEnd};
}

export function splitAndPopupify(s) {
  let split = s.split(/(?=[A-Z])/);
  let els = [];

  for (let i = 0; i < split.length; i++) {
    let name = split[i].replace(', ', '').replace(' + ', '').replace(' → ', '');

    s = s.replace(split[i], '');

    let el = document.createElement('span');
    el.innerText = split[i];
    el.id = `element-${i}`;

    if (split[i].trim() !== '-') {
      popupify(el);
    }

    els.push(el);
  }

  return [s, els];
}