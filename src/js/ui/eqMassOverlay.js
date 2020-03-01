import { getCharPos } from '/js/ui/formula';
import { getIndexes } from '/js/ui/popupify';

import { subscriptise, unsubscriptise } from '/js/utils/subscriptise';

let counts = {};

export function reset() {
  counts = {};

  [].slice.call(document.getElementsByClassName('mass-overlay')).forEach((x) => document.body.removeChild(x));
}

export function overlay(formula, mass) {
  formula = subscriptise(formula);

  let v = document.getElementById('formula').value;

  let indexStart = getIndexes(v, formula)[(counts[formula] || 0)];
  let indexEnd = indexStart + formula.length - 1;

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

  let overlay = document.createElement('div');
  overlay.className = 'mass-overlay';
  overlay.style.width = `${width}px`;
  overlay.style.left = `${posStart.x}px`;
  overlay.style.top = `${posStart.y - 30}px`;
  overlay.innerText = Math.round(mass);

  document.body.appendChild(overlay);

  counts[formula] = (counts[formula] || 0) + 1;
}