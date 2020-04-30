import * as Settings from '/js/info/settings';

import { subscriptise, unsubscriptise } from '/js/utils/subscriptise';
import { arrowise } from '/js/utils/arrowise';

import { popupify, splitAndPopupify } from '/js/ui/popupify';

import { periodicLookup, getElementByName, getSymbolFromElement, getElementSymbolByName } from '/js/info/elements';
import { compoundLookup, getCompoundByName, getCompoundsByFormula } from '/js/info/compounds';
import { titleCase, evalExp, simplifyFormula, processFormula } from '/js/utils/process';

import * as Tester from '/js/test/tester';

import * as Pubchem from '/js/api/pubchem';

import { balanceEquation } from '/js/utils/balance';

let f;

export function init() {
  f = document.getElementById('formula');
  f.focus();

  f.onkeypress = function(e) {
    if (e.key === 'Enter') {
      let formula = f.value;

      formula = unsubscriptise(formula);

      if (Settings.reverse === true && !formula.includes('→')) {
        formula = formula.replace(/[^a-z0-9 \(\)]/gmi, '');

        let reversed = processFormula(formula)[0];

        if (reversed !== false) {
          reversed = reversed.split(' - ')[0];

          if (reversed.indexOf('*') === -1 && (reversed.indexOf('-') !== -1 || reversed.indexOf(' ') === -1)) {
            formula = reversed;
          }
        }
      }

      if (Settings.simplify === true) {
        if (formula.includes('→')) {
          formula = balanceEquation(formula);
        } else {
          formula = formula.replace(/[^a-z0-9 \(\)]/gmi, '');

          let simplified = simplifyFormula(formula)[1];

          if (typeof simplified === 'string') {
            formula = simplified;
          }
        }
      }

      if (formula !== f.value) {
        f.value = formula;

        interpretInput();
      }

      if (formula.startsWith('test')) {
        Tester.performTests(parseInt(formula.substring(4)) * 1000 || 1000);
      }
    }
  };

  f.oninput = function() {
    interpretInput();
  };
}

document.onkeydown = function() {
  let focusedId = document.activeElement.id;

  if (focusedId !== 'compound-search' && focusedId !== 'formula' && focusedId !== 'equation-search') {
    f.focus();
  }
};

export function interpretInput() {
  document.getElementById('model-image').src = '';
  document.getElementById('model-label').innerText = '';

  let value = f.value;

  if (Settings.autoChange === true) {
    value = subscriptise(arrowise(unsubscriptise(value)));
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
      let name = dashSplit[0].replace('*', '').split(' / ')[0].split('(')[0];

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


  if (result[3] !== undefined) {
    let arrowPos = getArrowPos();
    let pRect = document.getElementById('elements-body').getBoundingClientRect();
    let maxHeight = result[3].productsOver.length > result[3].reactantsOver.length ? result[3].productsOver.length : result[3].reactantsOver.length;
    maxHeight *= 22;

    let pastEls = ['gen-sline', 'gen-productstext', 'gen-reactantstext'];

    for (let elID of pastEls) {
      let el = document.getElementById(elID);

      if (el !== null) {
        document.body.removeChild(el);
      }
    }

    if (maxHeight !== 0) {
      let arrowSplit = value.split('→').map((x) => x.trim());
      let reactants = simplifyFormula(arrowSplit[0])

      let sLinePos = {left: arrowPos.right - 22, top: arrowPos.bottom + 10};

      let sLine = document.createElement('div');
      sLine.id = 'gen-sline';
      sLine.style.width = '5px';
      sLine.style.height = `${maxHeight}px`;
      sLine.style.position = 'absolute';
      sLine.style.left = `${sLinePos.left}px`;
      sLine.style.top = `${sLinePos.top}px`;
      sLine.style.backgroundColor = 'rgba(200, 202, 204, .2)';

      let productsText = document.createElement('div');
      productsText.id = 'gen-productstext';
      productsText.style.left = `${sLinePos.left + 15}px`;
      productsText.style.top = `${sLinePos.top}px`;
      productsText.style.position = 'absolute';
    
      for (let p of result[3].productsOver) {
        let num = parseInt(p.substring(1));

        let el = document.createElement('div');
        el.innerText =  (!isNaN(num) ? `${num} ` : '') + periodicLookup[p[0]].name;

        productsText.appendChild(el);
      }

      let reactantsText = document.createElement('div');
      reactantsText.id = 'gen-reactantstext';
      reactantsText.style.right = `${window.innerWidth - (sLinePos.left - 10)}px`;
      reactantsText.style.top = `${sLinePos.top}px`;
      reactantsText.style.position = 'absolute';
      reactantsText.style.textAlign = 'right';
    
      for (let p of result[3].reactantsOver) {
        let num = parseInt(p.substring(1));

        let el = document.createElement('div');
        el.innerText =  (!isNaN(num) ? `${num} ` : '') + periodicLookup[p[0]].name;

        reactantsText.appendChild(el);
      }

      document.body.appendChild(sLine);
      document.body.appendChild(productsText);
      document.body.appendChild(reactantsText);
    }
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

function getArrowPos() {
  return [].slice.call(document.getElementById('elements-body').children).find((e) => e.innerText.includes('→')).getBoundingClientRect();
}

export function getCharPos(n) {
  let text = document.getElementById('formula').value;

  let newF = document.createElement('div');
  newF.id = 'formula';
  newF.style.opacity = 0;

  for (let c of text) {
    let cEl = document.createElement('span');
    cEl.innerText = c;

    newF.appendChild(cEl);
  }

  document.body.appendChild(newF);

  let rect = newF.children[n].getBoundingClientRect();

  document.body.removeChild(newF);

  return rect;
}