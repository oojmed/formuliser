import { scriptsLookup, scriptsLookupKeys } from '/js/info/scripts';

export function unsubscriptise(value) {
  for (let i = 0; i < scriptsLookupKeys.length; i++) {
    value = value.replace(new RegExp(`${scriptsLookupKeys[i]}`, 'gm'), scriptsLookup[scriptsLookupKeys[i]]);
  }

  return value;
}

function reverseStr(str) {
  return str.split('').reverse().join('');
}

export function subscriptise(value) {
  /*
    You might be wondering what is happening below,
    as most (modern) browsers don't support lookbehinds in regex yet (https://caniuse.com/#feat=js-regexp-lookbehind)
    you can't use them.

    So instead we reverse the regex,
    and reverse the string before doing it,
    then reverse it when finished.

    I'm sorry.
  */

  value = reverseStr(value).replace(/([0-9]+)(?=.*[A-Z])/gm, function(_, one) {
    let s = '';
    for (let c of _) {
      s += scriptsLookupKeys[c];
    }

    return s;
  });

  value = reverseStr(value);

  return value;
}