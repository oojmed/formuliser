import * as Settings from '/js/info/settings';
import { subscriptise, unsubscriptise } from '/js/utils/subscriptise';
import { popupify, splitAndPopupify } from '/js/ui/popupify';

import { compoundLookup, getCompoundByName, getCompoundsByFormula } from '/js/info/compounds';
import { titleCase, evalExp, simplifyFormula, processFormula } from '/js/utils/process';

import * as Pubchem from '/js/api/pubchem';

let f = document.getElementById('formula');

export function init() {
  f = document.getElementById('formula');
  f.focus();

  f.onkeypress = function(e) {
    if (e.key === 'Enter') {
      let formula = f.value;

      formula = unsubscriptise(formula);

      formula = formula.replace(/[^a-z0-9 \(\)]/gmi, '');

      if (Settings.reverse === true) {
        let reversed = processFormula(formula)[0];

        if (reversed !== false) {
          reversed = reversed.split(' - ')[0];

          if (reversed.indexOf('*') === -1 && (reversed.indexOf('-') !== -1 || reversed.indexOf(' ') === -1)) {
            formula = reversed;
          }
        }
      }

      if (Settings.simplify === true) {
        let simplified = simplifyFormula(formula)[1];

        if (typeof simplified === 'string') {
          formula = simplified;
        }
      }

      if (formula !== f.value) {
        f.value = formula;

        interpretInput();
      }
    }
  };

  f.oninput = function() {
    interpretInput();
  };
}

document.onkeydown = function() {
  let focusedId = document.activeElement.id;

  if (focusedId !== 'compound-search' && focusedId !== 'formula') {
    f.focus();
  }
};

export function interpretInput() {
  document.getElementById('model-image').src = '';
  document.getElementById('model-label').innerText = '';

  let value = f.value;

  if (Settings.autoSubscript === true) {
    value = subscriptise(value);
  }

  let s = f.selectionStart;

  f.value = value;

  f.setSelectionRange(s, s);

  let result = processFormula(value);

  if (result[0] === false) {
    document.getElementById("elements").style.color = "#B71C1C";
    document.getElementById("mass").style.color = "#B71C1C";

    document.getElementById("elements-bold").innerText = result[1][0];
    document.getElementById("elements-body").innerText = result[1][1];

    document.getElementById("mass").innerText = "Error";

    return;
  }

  document.getElementById("elements").style.color = "";
  document.getElementById("mass").style.color = "";

  document.getElementById("elements-bold").innerText = "";

  let body = result[0];
  let els = [];

  let revCompound = getCompoundByName(value);

  if (body !== undefined && body !== '') {
    let dashSplit = body.split(' - ');

    if (dashSplit.length === 2 && dashSplit[0].indexOf('*') === -1) {
      let name = dashSplit[0].replace('*', '').split(' / ')[0];

      name = revCompound === undefined ? name : titleCase(value);

      Pubchem.setImageFromName(name);
    }

    if (dashSplit.length === 2) {
      let details = document.createElement('details');

      let summary = document.createElement('summary');

      let r1 = splitAndPopupify(dashSplit[0]);

      summary.innerText = r1[0];
      summary.append(...r1[1]);

      let more = document.createElement('span');

      let r2 = splitAndPopupify(dashSplit[1]);

      more.innerText = r2[0];
      more.append(...r2[1]);

      details.appendChild(summary);
      details.appendChild(more);

      body = '';
      els = [details];
    } else {
      let r = splitAndPopupify(body);

      body = r[0];
      els = els.concat(r[1]);
    }
  }

  document.getElementById("elements-body").innerText = body;

  document.getElementById("elements-body").append(...els);

  /*for (let i = 0; i < els.length; i++) {
    document.getElementById("elements-body").appendChild(els[i]);
  }*/

  document.getElementById("mass").innerText = result[1];

  if (result[2] === undefined && revCompound !== undefined) {
    let r = processFormula(revCompound.formula);

    result[2] = r[2];
  }

  if (result[2] === undefined || result[2].length < 2) {
    return;
  }

  let popup = document.createElement('div');
  popup.id = 'mass-popup';

  for (let i = 0; i < result[2].length; i++) {
    let o = result[2][i];

    let e = document.createElement('div');
    e.className = 'row';

    let eEl = document.createElement('div');
    eEl.className = 'row-left';
    eEl.innerText = `${o.name} (${o.symbol})`;

    popupify(eEl);

    let eRight = document.createElement('div');
    eRight.className = 'row-right';
    eRight.innerText = Math.round(o.percent) + '%';
    eRight.title = o.percent;

    e.appendChild(eEl);
    e.appendChild(eRight);

    popup.appendChild(e);
  }

  document.getElementById('mass').prepend(popup);
}