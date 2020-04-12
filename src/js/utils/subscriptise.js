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
  value = reverseStr(value).replace(/([0-9+\-*/]+)([A-Za-z+\-*/])/gm, function(_, num, symbol) {
    let s = '';
    for (let c of num) {
      c = c === '+' ? 20 : c;
      c = c === '-' ? 21 : c;
      c = c === '*' ? 22 : c;
      c = c === '/' ? 23 : c; 

      s += scriptsLookupKeys[c];
    }

    // console.log(_, num, symbol, s + symbol);

    return s + symbol;
  });

  value = reverseStr(value);

  return value;
}