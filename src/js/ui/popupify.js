import { titleCase, evalExp, simplifyFormula, processFormula } from '/js/utils/process';
import { subscriptise, unsubscriptise } from '/js/utils/subscriptise';

import { compoundLookup, getCompoundByName, getCompoundsByFormula } from '/js/info/compounds';
import { periodicLookup, getElementByName, getSymbolFromElement, getElementSymbolByName } from '/js/info/elements';
import * as Pubchem from '/js/api/pubchem';

export function popupify(el) {
  el.onmouseleave = function() {
    document.getElementById('popup').className = '';

    let value = document.getElementById('formula').value;

    let result = processFormula(value);

    let body = result[0];

    let revCompound = getCompoundByName(value);

    if (body !== undefined && body !== '' && el.parentNode.innerText.indexOf('/') === -1) {
      document.getElementById('model-image').src = window.oldModelSrc;
      document.getElementById('model-label').innerText = window.oldModelLabel;
    }
  };

  el.onmouseenter = function() {
    window.oldModelSrc = document.getElementById('model-image').src;
    window.oldModelLabel = document.getElementById('model-label').innerText;

    document.getElementById('popup').className = 'show';
    document.getElementById('popup').innerHTML = '';

    let num = 1;
    let name = unsubscriptise(el.innerText).replace(',', '').replace(' /', '').replace('*', '').replace(/[0-9]{1,}/g, (_) => { num = _; return ''; }).trim();

    if (name.indexOf('(') !== -1) {
      name = name.split(' ')[0];
    }

    let title = document.createElement('div');
    title.id = 'popup-title';
    title.innerText = num !== 1 ? `${name} (x${num})` : name;

    document.getElementById('popup').appendChild(title);

    let element = getElementByName(name);
    element = element === undefined ? periodicLookup[name] : element;

    let rows = [];

    if (element !== undefined) {
      rows = [['Symbol', getSymbolFromElement(element) + (num !== 1 ? subscriptise(num.toString()) : '')], ['Mass', element.mass * num], ['Atomic', element.atomic], ['Group', element.group], ['Period', element.period], ['Phase (STP)', element.state], ['Desc', element.desc]];
    }

    let compound = getCompoundByName(name);

    if (compound !== undefined) {
      rows = [['Formula', (num !== 1 ? num.toString : '') + subscriptise(compound.formula)], ['Mass', processFormula(compound.formula)[1] * num]];

      Pubchem.setImageFromName(name);
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
  };
}

export function splitAndPopupify(s) {
  let split = s.split(/(?=[A-Z])/); // s.split(' ');
  let els = [];

  for (let i = 0; i < split.length; i++) {
    s = s.replace(split[i], '');

    let el = document.createElement('span');
    el.innerText = split[i] + ' ';

    if (split[i].trim() !== '-') {
      popupify(el);
    }

    els.push(el);
  }

  return [s, els];
}