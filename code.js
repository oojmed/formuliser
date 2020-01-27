let periodicLookup = {
'Ac': { name: 'Actinium', mass: 227.0278 },
'Ag': { name: 'Silver', mass: 107.8682 },
'Al': { name: 'Aluminium', mass: 26.981539 },
'Am': { name: 'Americium', mass: 243.0614 },
'Ar': { name: 'Argon', mass: 39.948 },
'As': { name: 'Arsenic', mass: 74.92159 },
'At': { name: 'Astatine', mass: 209.9871 },
'Au': { name: 'Gold', mass: 196.96654 },
'B': { name: 'Boron', mass: 10.811 },
'Ba': { name: 'Barium', mass: 137.327 },
'Be': { name: 'Beryllium', mass: 9.012182 },
'Bh': { name: 'Bohrium', mass: 262.1229 },
'Bi': { name: 'Bismuth', mass: 208.98037 },
'Bk': { name: 'Berkelium', mass: 247.0703 },
'Br': { name: 'Bromine', mass: 79.904 },
'C': { name: 'Carbon', mass: 12.011 },
'Ca': { name: 'Calcium', mass: 40.078 },
'Cd': { name: 'Cadmium', mass: 112.411 },
'Ce': { name: 'Cerium', mass: 140.115 },
'Cf': { name: 'Californium', mass: 251.0796 },
'Cl': { name: 'Chlorine', mass: 35.4527 },
'Cm': { name: 'Curium', mass: 247.0703 },
'Co': { name: 'Cobalt', mass: 58.9332 },
'Cr': { name: 'Chromium', mass: 51.9961 },
'Cs': { name: 'Caesium', mass: 132.90543 },
'Cu': { name: 'Copper', mass: 63.546 },
'Db': { name: 'Dubnium', mass: 262.1138 },
'Ds': { name: 'Darmstadtium', mass: 269 },
'Dy': { name: 'Dysprosium', mass: 162.5 },
'Er': { name: 'Erbium', mass: 167.26 },
'Es': { name: 'Einsteinium', mass: 252.0829 },
'Eu': { name: 'Europium', mass: 151.965 },
'F': { name: 'Fluorine', mass: 18.9984032 },
'Fe': { name: 'Iron', mass: 55.847 },
'Fm': { name: 'Fermium', mass: 257.0951 },
'Fr': { name: 'Francium', mass: 223.0197 },
'Ga': { name: 'Gallium', mass: 69.723 },
'Gd': { name: 'Gadolinium', mass: 157.25 },
'Ge': { name: 'Germanium', mass: 72.61 },
'H': { name: 'Hydrogen', mass: 1.00794 },
'He': { name: 'Helium', mass: 4.002602 },
'Hf': { name: 'Hafnium', mass: 178.49 },
'Hg': { name: 'Mercury', mass: 200.59 },
'Ho': { name: 'Holmium', mass: 164.93032 },
'Hs': { name: 'Hassium', mass: 265 },
'I': { name: 'Iodine', mass: 126.90447 },
'In': { name: 'Indium', mass: 114.82 },
'Ir': { name: 'Iridium', mass: 192.22 },
'K': { name: 'Potassium', mass: 39.0983 },
'Kr': { name: 'Krypton', mass: 83.8 },
'La': { name: 'Lanthanum', mass: 138.9055 },
'Li': { name: 'Lithium', mass: 6.941 },
'Lr': { name: 'Lawrencium', mass: 260.1053 },
'Lu': { name: 'Lutetium', mass: 174.967 },
'Md': { name: 'Mendelevium', mass: 258.0986 },
'Mg': { name: 'Magnesium', mass: 24.305 },
'Mn': { name: 'Manganese', mass: 54.93805 },
'Mo': { name: 'Molybdenum', mass: 95.94 },
'Mt': { name: 'Meitnerium', mass: 266 },
'N': { name: 'Nitrogen', mass: 14.00674 },
'Na': { name: 'Sodium', mass: 22.989768 },
'Nb': { name: 'Niobium', mass: 92.90638 },
'Nd': { name: 'Neodymium', mass: 144.24 },
'Ne': { name: 'Neon', mass: 20.1797 },
'Ni': { name: 'Nickel', mass: 58.69 },
'No': { name: 'Nobelium', mass: 259.1009 },
'Np': { name: 'Neptunium', mass: 237.0482 },
'O': { name: 'Oxygen', mass: 15.9994 },
'Os': { name: 'Osmium', mass: 190.2 },
'P': { name: 'Phosphorus', mass: 30.973762 },
'Pa': { name: 'Protactinium', mass: 231.0359 },
'Pb': { name: 'Lead', mass: 207.2 },
'Pd': { name: 'Palladium', mass: 106.42 },
'Pm': { name: 'Promethium', mass: 146.9151 },
'Po': { name: 'Polonium', mass: 208.9824 },
'Pr': { name: 'Praseodymium', mass: 140.90765 },
'Pt': { name: 'Platinum', mass: 195.08 },
'Pu': { name: 'Plutonium', mass: 244.0642 },
'Ra': { name: 'Radium', mass: 226.0254 },
'Rb': { name: 'Rubidium', mass: 85.4678 },
'Re': { name: 'Rhenium', mass: 186.207 },
'Rf': { name: 'Rutherfordium', mass: 261.1087 },
'Rg': { name: 'Roentgenium', mass: 272 },
'Rh': { name: 'Rhodium', mass: 102.9055 },
'Rn': { name: 'Radon', mass: 222.0176 },
'Ru': { name: 'Ruthenium', mass: 101.07 },
'S': { name: 'Sulfur', mass: 32.066 },
'Sb': { name: 'Antimony', mass: 121.75 },
'Sc': { name: 'Scandium', mass: 44.95591 },
'Se': { name: 'Selenium', mass: 78.96 },
'Sg': { name: 'Seaborgium', mass: 263.1182 },
'Si': { name: 'Silicon', mass: 28.0855 },
'Sm': { name: 'Samarium', mass: 150.36 },
'Sn': { name: 'Tin', mass: 118.71 },
'Sr': { name: 'Strontium', mass: 87.62 },
'Ta': { name: 'Tantalum', mass: 180.9479 },
'Tb': { name: 'Terbium', mass: 158.92534 },
'Tc': { name: 'Technetium', mass: 98.9063 },
'Te': { name: 'Tellurium', mass: 127.6 },
'Th': { name: 'Thorium', mass: 232.0381 },
'Ti': { name: 'Titanium', mass: 47.88 },
'Tl': { name: 'Thallium', mass: 204.3833 },
'Tm': { name: 'Thulium', mass: 168.93421 },
'U': { name: 'Uranium', mass: 238.0289 },
'Ubn': { name: 'Unbinilium', mass: 0 },
'Ubu': { name: 'Unbiunium', mass: 0 },
'Uue': { name: 'Ununnenium', mass: 0 },
'Cn': { name: 'Copernicium', mass: 277 },
'Lv': { name: 'Livermorium', mass: 0 },
'Og': { name: 'Oganesson', mass: 0 },
'Mc': { name: 'Moscovium', mass: 0 },
'Fl': { name: 'Flerovium', mass: 0 },
'Ts': { name: 'Tennessine', mass: 0 },
'Nh': { name: 'Nihonium', mass: 0 },
'V': { name: 'Vanadium', mass: 50.9415 },
'W': { name: 'Tungsten', mass: 183.85 },
'Xe': { name: 'Xenon', mass: 131.29 },
'Y': { name: 'Yttrium', mass: 88.90585 },
'Yb': { name: 'Ytterbium', mass: 173.04 },
'Zn': { name: 'Zinc', mass: 65.39 },
'Zr': { name: 'Zirconium', mass: 91.224 },
};

let compoundLookup = {
'H2O': 'Water',
'C6H12O6': 'Glucose',
'C12H22O11': 'Sucrose',
'HCl': 'Hydrochloric acid',
'HNO3': 'Nitric acid',
'H2SO4': 'Sulfuric acid',
'C8H18': 'Octane',
'NaHCO3': 'Baking Soda',
'CH4': 'Methane',
'NH3': 'Ammonia',
'C6H6': 'Benzene',
'C2H6O': 'Ethanol',
'H2O2': 'Hydrogen Peroxide',
'CH3COOH': 'Acetic Acid',
'CH3OH': 'Methanol',
'C60': 'Buckminsterfullerene',
'C2H4': 'Ethylene',
'C3H6O': 'Acetone',
'C4H10': 'Butane',
'C6H8O7': 'Citric Acid',
'C4H8O': 'Tetrahydrofuran',
'C6H14': 'Hexane',
'C3H8': 'Propane',
'C2H4O2': 'Vinegar',
'C10H16O': 'Camphor',
'NaCl': 'Salt',
'SiO2': 'Silica',
'OH': 'Hydroxide',
'O3': 'Ozone',
'Fe2O3': 'Rust',
'CaO': 'Quicklime',
'CaCO3': 'Limestone',
'CO3': 'Carbonate',
'HCO3': 'Bicarbonate',
'PO4': 'Phosphate',
'NH4': 'Ammonium',
'CN': 'Cyanide',
'NO3': 'Nitrate',
'C7H8': 'Toluene',
'SO4': 'Sulfate',
'Al3F14Na5': 'Chiolite',
'AlF6Na3': 'Cryolite',
'Al2O5Si': 'Andalusite',
'Al6O13Si2': 'Mullite',
'Al3F14Na5': 'Chiolite',
'AsH3': 'Arsine',
'B3N3H6': 'Borazine',
'BaFeSi4O10': 'Gillespite',
'BaSO4': 'Barite',
'CHCl3': 'Chloroform'
};
let compoundLookupKeys = Object.keys(compoundLookup);
let compoundLookupValues = Object.values(compoundLookup);

// window.periodicLookupKeys = Object.keys(window.lookup);

let scriptsLookup = {'\u2080': '0', '\u2081': '1', '\u2082': '2', '\u2083': '3', '\u2084': '4', '\u2085': '5', '\u2086': '6', '\u2087': '7', '\u2088': '8', '\u2089': '9', '\u2070': '0', '\u00B9': '1', '\u00B2': '2', '\u00B3': '3', '\u2074': '4', '\u2075': '5', '\u2076': '6', '\u2077': '7', '\u2078': '8', '\u2079': '9'};
let scriptsLookupKeys = Object.keys(scriptsLookup);

let genNumPrefixes = [
'',
'mono',
'di',
'tri',
'tetra',
'penta',
'hexa',
'hepta',
'octa',
'nona',
'deca',
'undeca',
'dodeca',
'trideca',
'tetradeca',
'pentadeca',
'hexadeca',
'heptadeca',
'octadeca',
'nonadeca',
'icosa',
'henicosa',
'docosa',
'tricosa',
'triaconta',
'hentriaconta'
];

let f = document.getElementById('formula');
f.focus();

f.onblur = function(e) {
  document.getElementById('formula').focus();
};

function processFormula(formula, subprocess) {
  for (let i = 0; i < scriptsLookupKeys.length; i++) {
    formula = formula.replace(new RegExp(scriptsLookupKeys[i], 'gm'), scriptsLookup[scriptsLookupKeys[i]]);
  }

  formula = formula.replace(/[^a-z0-9 \(\)]/gmi, '');

  let reverseElement = Object.values(periodicLookup).find(({ name }) => name.toLowerCase() === formula.toLowerCase());

  if (reverseElement !== undefined) {
    return [reverseElement.name, reverseElement.mass];
  }

  let reverseCompoundName = compoundLookupValues.find(name => name.toLowerCase() === formula.toLowerCase());

  if (reverseCompoundName !== undefined) {
    let reverseCompoundFormula = compoundLookupKeys[compoundLookupValues.indexOf(reverseCompoundName)];

    let processed = processFormula(reverseCompoundFormula);

    return [processed[0].split(' - ')[1], processed[1]];
  }

  formula = formula.replace(/ /g, '');

  let symbols = formula.split(/(?=[A-Z\(\)])/);

  // symbols.unshift("(");
  // symbols.push(")");

  let multi = [];

  let clone = [];

  for (let i = symbols.length - 1; i >= 0; i--) {
    if (symbols[i] === "(") {
      if (multi.length === 0) {
        return [false, ['', 'Brackets not ending']];
      }

      multi.pop();
    } else if (symbols[i][0] === ")") {
      let num = parseFloat(symbols[i].slice(1));
      num = isNaN(num) ? 0 : num;

      multi.push(num);
    } else {
      let split = symbols[i].split(/(?=[0-9])/)
      let num = parseFloat(split.slice(1).join(''));
      num = isNaN(num) ? 1 : num;

      let mul = multi.reduce((a, b) => a + b, 0);
      mul = mul === 0 ? 1 : mul;

      clone.unshift(split[0] + (num * mul).toString());
    }
  }

  if (multi.length > 0) {
    return [false, ['', 'Brackets not opening']];
  }

  symbols = clone.slice(0);

  let elements = [];
  let names = [];
  let totalMass = 0;
  let fail = false;

  for (let i = 0; i < symbols.length; i++) {
    let s = symbols[i];
    let n = 1;

    if (s.replace(/[^0-9]/gm, "").length > 0) {
        let numSplit = s.split(/(?=[0-9])/);

        s = numSplit.shift();

        n = parseFloat(numSplit.join(""));
    }

    for (let y = 0; y < n; y++) {
        let el = periodicLookup[s];

        if (el === undefined) { fail = s; break; }

        names.push(el.name);
        totalMass += el.mass;

        elements.push(el);
    }
  }

  if (fail) { return [false, [fail, ' is not recongised']]; }

  if (elements.length >= 10000) {
    return [false, [elements.length, ' is over the element processing limit']]
  }

  let lastName = "";
  let lastCount = 1;

  let namesCombined = [];
  for (let i = 0; i < names.length; i++) {
      let n = names[i];

      if (n.split(" ")[0] === lastName) {
        lastCount++;

        namesCombined.pop();

        namesCombined.push(`${n} (x${lastCount})`);
      } else {
        namesCombined.push(n);

        lastCount = 1;
      }

      lastName = n;
  }

  let namesFinal = namesCombined.join(', ');

  if (subprocess !== false) {
    for (let i = 0; i < compoundLookupKeys.length; i++) {
      let c = compoundLookupKeys[i];

      let p = processFormula(c, false);

      if (namesFinal === p[0]) { // if (namesFinal.indexOf(p[0]) !== -1) {
        namesFinal = `${compoundLookup[c]} - ${namesFinal}`;
      }
    }

    if (namesFinal === namesCombined.join(', ') && namesFinal.replace(/[^,]/g, "").length === 1) {
      let newNames = namesCombined.slice(0);

      for (let i = 0; i < newNames.length; i++) {
        newNames[i] = newNames[i].replace(/ygen\b/, 'ide');
        newNames[i] = newNames[i].replace(/ine\b/, 'ide');

        if (i !== 0) {
          newNames[i] = newNames[i].replace(/^([A-Za-z]{1,})$/, function (_, el) {
            let prefix = el[0] === "O" ? "Mon" : "Mono";

            return prefix + el.toLowerCase();
          });
        }

        newNames[i] = newNames[i].replace(/^([A-Za-z]{1,}) \(x([0-9]{1,3})\)/, function (_, el, count) {
          let numPrefix = genNumPrefixes[parseInt(count)];
          numPrefix = numPrefix === undefined ? '?' : numPrefix.replace('a', '');
          numPrefix = numPrefix[0].toUpperCase() + numPrefix.slice(1).toLowerCase(); // Sentance Case

          el = el.toLowerCase();

          return numPrefix + el;
        });
      }

      namesFinal = `${newNames.join(' ')}* - ${namesFinal}`;
    }
  }

  return [namesFinal, totalMass === 0 ? "" : parseFloat(totalMass.toPrecision(5))];
}

f.oninput = function() {
  let value = f.value;

  for (let i = 0; i < scriptsLookupKeys.length; i++) {
    value = value.replace(new RegExp(scriptsLookup[scriptsLookupKeys[i]], 'gm'), scriptsLookupKeys[i]);
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

  document.getElementById("elements-body").innerText = result[0];
  document.getElementById("mass").innerText = result[1];
}

document.onclick = function(e) {
    // console.log(e);

    // document.getElementById('formula').focus();
};