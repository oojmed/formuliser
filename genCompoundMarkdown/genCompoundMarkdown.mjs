import fs from 'fs';

let scriptsLookup = {'\u2080': '0', '\u2081': '1', '\u2082': '2', '\u2083': '3', '\u2084': '4', '\u2085': '5', '\u2086': '6', '\u2087': '7', '\u2088': '8', '\u2089': '9', '\u2070': '0', '\u00B9': '1', '\u00B2': '2', '\u00B3': '3', '\u2074': '4', '\u2075': '5', '\u2076': '6', '\u2077': '7', '\u2078': '8', '\u2079': '9'};
let scriptsLookupKeys = Object.keys(scriptsLookup);

function reverseStr(str) {
  return str.split('').reverse().join('');
}

function subscriptise(value) {
  value = reverseStr(value).replace(/([0-9]+)([A-Z])/gm, function(_, num, symbol) {
    let s = '';
    for (let c of num) {
      s += scriptsLookupKeys[c];
    }

    return s + symbol;
  });

  value = reverseStr(value);

  return value;
}

import compounds from './compounds.mjs';

let output = ['# Formuliser Compounds'];

for (let c of compounds) {
  output.push(`- ${c.name} - ${subscriptise(c.formula)}`);
}

output = output.join('\n');

fs.writeFileSync('../compounds.md', output);

console.log(output, '\n\n\nWrote to "../compounds.md"\n\nCleaning up...');

fs.unlinkSync('compounds.mjs');

console.log('Cleaned up')