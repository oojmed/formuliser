import { genNumPrefixes } from '/js/info/numPrefixes';

export function generate(s, firstElement) {
  s = compoundise(s);

  let split = s.split(', ');

  if (split.length <= 2) {
    for (let i = 0; i < split.length; i++) {
      split[i] = split[i].replace(/ygen\b/g, 'ide');
      split[i] = split[i].replace(/ine\b/g, 'ide');

      split[i] = i !== 0 ? monoise(split[i], firstElement) : split[i];

      split[i] = prefixise(split[i]);
    }

    s = split.join(' ');
  }

  return s;
}

function compoundise(s) {
  let subCompounds = [
    ['Oxygen, Hydrogen', 'Hydroxide'],
    ['Hydrogen, Carbon, Oxygen (x3)', 'Bicarbonate'],
    ['Carbon, Oxygen (x3)', 'Carbonate']
  ];

  subCompounds.forEach((c) => {
    s = s.replace(new RegExp(`, ${c[0].replace('(', '\\(').replace(')', '\\)')}$`), ` ${c[1]}`);
  });

  return s;
}

function monoise(s, firstElement) {
  return s.replace(/^([A-Za-z]{1,})$/, function (_, el) {
    if (firstElement.desc.indexOf('metal') === -1) {
      let prefix = el[0] === "O" ? "Mon" : "Mono";

      return prefix + el.toLowerCase();
    } else {
      return el;
    }
  });
}

function prefixise(s) {
  return s.replace(/^([A-Za-z]{1,}) \(x([0-9]{1,3})\)/, function (_, el, count) {
    let numPrefix = genNumPrefixes[parseInt(count)];
    numPrefix = numPrefix === undefined ? '?' : numPrefix.replace('a', '');
    numPrefix = numPrefix[0].toUpperCase() + numPrefix.slice(1).toLowerCase(); // Sentance Case

    el = el.toLowerCase();

    return numPrefix + el;
  });
}