import { normalArrow, reversibleArrow, normalToReplace, reversibleToReplace } from '/js/info/arrows';

export function arrowise(s) {
  for (let x of reversibleToReplace) {
    s = s.replace(new RegExp(x, 'gm'), reversibleArrow);
  }

  for (let x of normalToReplace) {
    s = s.replace(new RegExp(x, 'gm'), normalArrow);
  }

  return s;
}