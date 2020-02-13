let periodicLookup = {
'Ac': { name: 'Actinium', mass: 227.0278, atomic: 89, group: 3, period: 7, block: 'f', state: 'Solid', occurance: 'Transient', desc: 'Actinide' },
'Ag': { name: 'Silver', mass: 107.8682, atomic: 47, group: 11, period: 5, block: 'd', state: 'Solid', occurance: 'Primordial', desc: 'Transition metal' },
'Al': { name: 'Aluminium', mass: 26.981539, atomic: 13, group: 13, period: 3, block: 'p', state: 'Solid', occurance: 'Primordial', desc: 'Metal' },
'Am': { name: 'Americium', mass: 243.0614, atomic: 95, group: 3, period: 7, block: 'f', state: 'Solid', occurance: 'Transient', desc: 'Actinide' },
'Ar': { name: 'Argon', mass: 39.948, atomic: 18, group: 18, period: 3, block: 'p', state: 'Gas', occurance: 'Primordial', desc: 'Noble gas' },
'As': { name: 'Arsenic', mass: 74.92159, atomic: 33, group: 15, period: 4, block: 'p', state: 'Solid', occurance: 'Primordial', desc: 'Metalloid' },
'At': { name: 'Astatine', mass: 209.9871, atomic: 85, group: 17, period: 6, block: 'p', state: 'Solid', occurance: 'Transient', desc: 'Halogen' },
'Au': { name: 'Gold', mass: 196.96654, atomic: 79, group: 11, period: 6, block: 'd', state: 'Solid', occurance: 'Primordial', desc: 'Transition metal' },
'B': { name: 'Boron', mass: 10.811, atomic: 5, group: 13, period: 2, block: 'p', state: 'Solid', occurance: 'Primordial', desc: 'Metalloid' },
'Ba': { name: 'Barium', mass: 137.327, atomic: 56, group: 2, period: 6, block: 's', state: 'Solid', occurance: 'Primordial', desc: 'Alkaline earth metal' },
'Be': { name: 'Beryllium', mass: 9.012182, atomic: 4, group: 2, period: 2, block: 's', state: 'Solid', occurance: 'Primordial', desc: 'Alkaline earth metal' },
'Bh': { name: 'Bohrium', mass: 262.1229, atomic: 107, group: 7, period: 7, block: 'd', state: '', occurance: 'Synthetic', decs: 'Transition metal' },
'Bi': { name: 'Bismuth', mass: 208.98037, atomic: 83, group: 15, period: 6, block: 'p', state: 'Solid', occurance: 'Primordial', desc: 'Metal' },
'Bk': { name: 'Berkelium', mass: 247.0703, atomic: 97, group: 3, period: 7, block: 'f', state: 'Solid', occurance: 'Transient', desc: 'Actinide' },
'Br': { name: 'Bromine', mass: 79.904, atomic: 35, group: 17, period: 4, block: 'p', state: 'Liquid', occurance: 'Primordial', desc: 'Halogen' },
'C': { name: 'Carbon', mass: 12.011, atomic: 6, group: 14, period: 2, block: 'p', state: 'Solid', occurance: 'Primordial', desc: 'Non-metal' },
'Ca': { name: 'Calcium', mass: 40.078, atomic: 20, group: 2, period: 4, block: 's', state: 'Solid', occurance: 'Primordial', desc: 'Alkaline earth metal' },
'Cd': { name: 'Cadmium', mass: 112.411, atomic: 48, group: 12, period: 5, block: 'd', state: 'Solid', occurance: 'Primordial', desc: 'Transition metal' },
'Ce': { name: 'Cerium', mass: 140.115, atomic: 58, group: 3, period: 6, block: 'f', state: 'Solid', occurance: 'Primordial', desc: 'Lanthanide' },
'Cf': { name: 'Californium', mass: 251.0796, atomic: 98, group: 3, period: 7, block: 'f', state: 'Solid', occurance: 'Transient', desc: 'Actinide' },
'Cl': { name: 'Chlorine', mass: 35.4527, atomic: 17, group: 17, period: 3, block: 'p', state: 'Gas', occurance: 'Primordial', desc: 'Halogen' },
'Cm': { name: 'Curium', mass: 247.0703, atomic: 96, group: 3, period: 7, block: 'f', state: 'Solid', occurance: 'Transient', desc: 'Actinide' },
'Co': { name: 'Cobalt', mass: 58.9332, atomic: 112, group: 12, period: 7, block: 'd', state: '', occurance: 'Synthetic', desc: 'Transition metal' },
'Cr': { name: 'Chromium', mass: 51.9961, atomic: 27, group: 9, period: 4, block: 'd', state: 'Solid', occurance: 'Primordial', desc: 'Transition metal' },
'Cs': { name: 'Caesium', mass: 132.90543, atomic: 24, group: 6, period: 4, block: 'd', state: 'Solid', occurance: 'Primordial', desc: 'Transition metal' },
'Cu': { name: 'Copper', mass: 63.546, atomic: 55, group: 1, period: 6, block: 's', state: 'Solid', occurance: 'Primordial', desc: 'Alkali metal' },
'Db': { name: 'Dubnium', mass: 262.1138, atomic: 29, group: 11, period: 4, block: 'd', state: 'Solid', occurance: 'Primordial', desc: 'Transition metal' },
'Ds': { name: 'Darmstadtium', mass: 269, atomic: 105, group: 5, period: 7, block: 'd', state: '', occurance: 'Synthetic', desc: 'Transition metal' },
'Dy': { name: 'Dysprosium', mass: 162.5, atomic: 110, group: 10, period: 7, block: 'd', state: '', occurance: 'Synthetic', desc: '' },
'Er': { name: 'Erbium', mass: 167.26, atomic: 66, group: 3, period: 6, block: 'f', state: 'Solid', occurance: 'Primordial', desc: 'Lanthanide' },
'Es': { name: 'Einsteinium', mass: 252.0829, atomic: 68, group: 3, period: 6, block: 'f', state: 'Solid', occurance: 'Primordial', desc: 'Lanthanide' },
'Eu': { name: 'Europium', mass: 151.965, atomic: 99, group: 3, period: 7, block: 'f', state: 'Solid', occurance: 'Synthetic', desc: 'Actinide' },
'F': { name: 'Fluorine', mass: 18.9984032, atomic: 63, group: 3, period: 6, block: 'f', state: 'Solid', occurance: 'Primordial', desc: 'Lanthanide' },
'Fe': { name: 'Iron', mass: 55.847, atomic: 9, group: 17, period: 2, block: 'p', state: 'Gas', occurance: 'Primordial', desc: 'Halogen' },
'Fm': { name: 'Fermium', mass: 257.0951, atomic: 26, group: 8, period: 4, block: 'd', state: 'Solid', occurance: 'Primordial', desc: 'Transition metal' },
'Fr': { name: 'Francium', mass: 223.0197, atomic: 114, group: 14, period: 7, block: 'p', state: '', occurance: 'Synthetic', desc: '' },
'Ga': { name: 'Gallium', mass: 69.723, atomic: 100, group: 3, period: 7, block: 'f', state: 'Solid', occurance: 'Synthetic', desc: 'Actinide' },
'Gd': { name: 'Gadolinium', mass: 157.25, atomic: 87, group: 1, period: 7, block: 's', state: 'Solid', occurance: 'Transient', desc: 'Alkali metal' },
'Ge': { name: 'Germanium', mass: 72.61, atomic: 31, group: 13, period: 4, block: 'p', state: 'Solid', occurance: 'Primordial', desc: 'Metal' },
'H': { name: 'Hydrogen', mass: 1.00794, atomic: 64, group: 3, period: 6, block: 'f', state: 'Solid', occurance: 'Primordial', desc: 'Lanthanide' },
'He': { name: 'Helium', mass: 4.002602, atomic: 32, group: 14, period: 4, block: 'p', state: 'Solid', occurance: 'Primordial', desc: 'Metalloid' },
'Hf': { name: 'Hafnium', mass: 178.49, atomic: 1, group: 1, period: 1, block: 's', state: 'Gas', occurance: 'Primordial', desc: 'Non-metal' },
'Hg': { name: 'Mercury', mass: 200.59, atomic: 2, group: 18, period: 1, block: 's', state: 'Gas', occurance: 'Primordial', desc: 'Noble gas' },
'Ho': { name: 'Holmium', mass: 164.93032, atomic: 72, group: 4, period: 6, block: 'd', state: 'Solid', occurance: 'Primordial', desc: 'Transition metal' },
'Hs': { name: 'Hassium', mass: 265, atomic: 80, group: 12, period: 6, block: 'd', state: 'Liquid', occurance: 'Primordial', desc: 'Transition metal' },
'I': { name: 'Iodine', mass: 126.90447, atomic: 67, group: 3, period: 6, block: 'f', state: 'Solid', occurance: 'Primordial', desc: 'Lanthanide' },
'In': { name: 'Indium', mass: 114.82, atomic: 108, group: 8, period: 7, block: 'd', state: '', occurance: 'Synthetic', desc: 'Transition metal' },
'Ir': { name: 'Iridium', mass: 192.22, atomic: 53, group: 17, period: 5, block: 'p', state: 'Solid', occurance: 'Primordial', desc: 'Halogen' },
'K': { name: 'Potassium', mass: 39.0983, atomic: 49, group: 13, period: 5, block: 'p', state: 'Solid', occurance: 'Primordial', desc: 'Metal' },
'Kr': { name: 'Krypton', mass: 83.8, atomic: 77, group: 9, period: 6, block: 'd', state: 'Solid', occurance: 'Primordial', desc: 'Transition metal' },
'La': { name: 'Lanthanum', mass: 138.9055, atomic: 19, group: 1, period: 4, block: 's', state: 'Solid', occurance: 'Primordial', desc: 'Alkali metal' },
'Li': { name: 'Lithium', mass: 6.941, atomic: 36, group: 18, period: 4, block: 'p', state: 'Gas', occurance: 'Primordial', desc: 'Noble gas' },
'Lr': { name: 'Lawrencium', mass: 260.1053, atomic: 57, group: 3, period: 6, block: 'f', state: 'Solid', occurance: 'Primordial', desc: 'Lanthanide' },
'Lu': { name: 'Lutetium', mass: 174.967, atomic: 3, group: 1, period: 2, block: 's', state: 'Solid', occurance: 'Primordial', desc: 'Alkali metal' },
'Md': { name: 'Mendelevium', mass: 258.0986, atomic: 103, group: 3, period: 7, block: 'f', state: 'Solid', occurance: 'Synthetic', desc: '' },
'Mg': { name: 'Magnesium', mass: 24.305, atomic: 71, group: 3, period: 6, block: 'f', state: 'Solid', occurance: 'Primordial', desc: 'Lanthanide' },
'Mn': { name: 'Manganese', mass: 54.93805, atomic: 116, group: 16, period: 7, block: 'p', state: '', occurance: 'Synthetic', desc: '' },
'Mo': { name: 'Molybdenum', mass: 95.94, atomic: 115, group: 15, period: 7, block: 'p', state: '', occurance: 'Synthetic', desc: '' },
'Mt': { name: 'Meitnerium', mass: 266, atomic: 101, group: 3, period: 7, block: 'f', state: 'Solid', occurance: 'Synthetic', desc: 'Actinide' },
'N': { name: 'Nitrogen', mass: 14.00674, atomic: 12, group: 2, period: 3, block: 's', state: 'Solid', occurance: 'Primordial', desc: 'Alkaline earth metal' },
'Na': { name: 'Sodium', mass: 22.989768, atomic: 25, group: 7, period: 4, block: 'd', state: 'Solid', occurance: 'Primordial', desc: 'Transition metal' },
'Nb': { name: 'Niobium', mass: 92.90638, atomic: 42, group: 6, period: 5, block: 'd', state: 'Solid', occurance: 'Primordial', desc: 'Transition metal' },
'Nd': { name: 'Neodymium', mass: 144.24, atomic: 109, group: 9, period: 7, block: 'd', state: '', occurance: 'Synthetic', desc: '' },
'Ne': { name: 'Neon', mass: 20.1797, atomic: 7, group: 15, period: 2, block: 'p', state: 'Gas', occurance: 'Primordial', desc: 'Non-metal' },
'Ni': { name: 'Nickel', mass: 58.69, atomic: 11, group: 1, period: 3, block: 's', state: 'Solid', occurance: 'Primordial', desc: 'Alkali metal' },
'No': { name: 'Nobelium', mass: 259.1009, atomic: 41, group: 5, period: 5, block: 'd', state: 'Solid', occurance: 'Primordial', desc: 'Transition metal' },
'Np': { name: 'Neptunium', mass: 237.0482, atomic: 60, group: 3, period: 6, block: 'f', state: 'Solid', occurance: 'Primordial', desc: 'Lanthanide' },
'O': { name: 'Oxygen', mass: 15.9994, atomic: 10, group: 18, period: 2, block: 'p', state: 'Gas', occurance: 'Primordial', desc: 'Noble gas' },
'Os': { name: 'Osmium', mass: 190.2, atomic: 113, group: 13, period: 7, block: 'p', state: '', occurance: ' Synthetic', desc: '' },
'P': { name: 'Phosphorus', mass: 30.973762, atomic: 28, group: 10, period: 4, block: 'd', state: 'Solid', occurance: 'Primordial', desc: 'Transition metal' },
'Pa': { name: 'Protactinium', mass: 231.0359, atomic: 102, group: 3, period: 7, block: 'f', state: 'Solid', occurance: 'Synthetic', desc: 'Actinide' },
'Pb': { name: 'Lead', mass: 207.2, atomic: 93, group: 3, period: 7, block: 'f', state: 'Solid', occurance: 'Transient', desc: 'Actinide' },
'Pd': { name: 'Palladium', mass: 106.42, atomic: 8, group: 16, period: 2, block: 'p', state: 'Gas', occurance: 'Primordial', desc: 'Non-metal' },
'Pm': { name: 'Promethium', mass: 146.9151, atomic: 118, group: 18, period: 7, block: 'p', state: '', occurance: 'Synthetic', desc: '' },
'Po': { name: 'Polonium', mass: 208.9824, atomic: 76, group: 8, period: 6, block: 'd', state: 'Solid', occurance: 'Primordial', desc: 'Transition metal' },
'Pr': { name: 'Praseodymium', mass: 140.90765, atomic: 15, group: 15, period: 3, block: 'p', state: 'Solid', occurance: 'Primordial', desc: 'Non-metal' },
'Pt': { name: 'Platinum', mass: 195.08, atomic: 91, group: 3, period: 7, block: 'f', state: 'Solid', occurance: 'Transient', desc: 'Actinide' },
'Pu': { name: 'Plutonium', mass: 244.0642, atomic: 82, group: 14, period: 6, block: 'p', state: 'Solid', occurance: 'Primordial', desc: 'Metal' },
'Ra': { name: 'Radium', mass: 226.0254, atomic: 46, group: 10, period: 5, block: 'd', state: 'Solid', occurance: 'Primordial', desc: 'Transition metal' },
'Rb': { name: 'Rubidium', mass: 85.4678, atomic: 61, group: 3, period: 6, block: 'f', state: 'Solid', occurance: 'Transient', desc: 'Lanthanide' },
'Re': { name: 'Rhenium', mass: 186.207, atomic: 84, group: 16, period: 6, block: 'p', state: 'Solid', occurance: 'Transient', desc: 'Metal' },
'Rf': { name: 'Rutherfordium', mass: 261.1087, atomic: 59, group: 3, period: 6, block: 'f', state: 'Solid', occurance: 'Primordial', desc: 'Lanthanide' },
'Rg': { name: 'Roentgenium', mass: 272, atomic: 78, group: 10, period: 6, block: 'd', state: 'Solid', occurance: 'Primordial', desc: 'Transition metal' },
'Rh': { name: 'Rhodium', mass: 102.9055, atomic: 94, group: 3, period: 7, block: 'f', state: 'Solid', occurance: 'Primordial', desc: 'Actinide' },
'Rn': { name: 'Radon', mass: 222.0176, atomic: 88, group: 2, period: 7, block: 's', state: 'Solid', occurance: 'Transient', desc: 'Alkaline earth metal' },
'Ru': { name: 'Ruthenium', mass: 101.07, atomic: 37, group: 1, period: 5, block: 's', state: 'Solid', occurance: 'Primordial', desc: 'Alkali metal' },
'S': { name: 'Sulfur', mass: 32.066, atomic: 75, group: 7, period: 6, block: 'd', state: 'Solid', occurance: 'Primordial', desc: 'Transition metal' },
'Sb': { name: 'Antimony', mass: 121.75, atomic: 104, group: 4, period: 7, block: 'd', state: 'Solid', occurance: 'Synthetic', desc: '' },
'Sc': { name: 'Scandium', mass: 44.95591, atomic: 111, group: 11, period: 7, block: 'd', state: '', occurance: 'Synthetic', desc: '' },
'Se': { name: 'Selenium', mass: 78.96, atomic: 45, group: 9, period: 5, block: 'd', state: 'Solid', occurance: 'Primordial', desc: 'Transition metal' },
'Sg': { name: 'Seaborgium', mass: 263.1182, atomic: 86, group: 18, period: 6, block: 'p', state: 'Gas', occurance: 'Transient', desc: 'Noble gas' },
'Si': { name: 'Silicon', mass: 28.0855, atomic: 44, group: 8, period: 5, block: 'd', state: 'Solid', occurance: 'Primordial', desc: 'Transition metal' },
'Sm': { name: 'Samarium', mass: 150.36, atomic: 16, group: 16, period: 3, block: 'p', state: 'Solid', occurance: 'Primordial', desc: 'Non-metal' },
'Sn': { name: 'Tin', mass: 118.71, atomic: 51, group: 15, period: 5, block: 'p', state: 'Solid', occurance: 'Primordial', desc: 'Metalloid' },
'Sr': { name: 'Strontium', mass: 87.62, atomic: 21, group: 3, period: 4, block: 'd', state: 'Solid', occurance: 'Primordial', desc: 'Transition metal' },
'Ta': { name: 'Tantalum', mass: 180.9479, atomic: 34, group: 16, period: 4, block: 'p', state: 'Solid', occurance: 'Primordial', desc: 'Non-metal' },
'Tb': { name: 'Terbium', mass: 158.92534, atomic: 106, group: 6, period: 7, block: 'd', state: '', occurance: 'Synthetic', desc: 'Transition metal' },
'Tc': { name: 'Technetium', mass: 98.9063, atomic: 14, group: 14, period: 3, block: 'p', state: 'Solid', occurance: 'Primordial', desc: 'Metalloid' },
'Te': { name: 'Tellurium', mass: 127.6, atomic: 62, group: 3, period: 6, block: 'f', state: 'Solid', occurance: 'Primordial', desc: 'Lanthanide' },
'Th': { name: 'Thorium', mass: 232.0381, atomic: 50, group: 14, period: 5, block: 'p', state: 'Solid', occurance: 'Primordial', desc: 'Metal' },
'Ti': { name: 'Titanium', mass: 47.88, atomic: 38, group: 2, period: 5, block: 's', state: 'Solid', occurance: 'Primordial', desc: 'Alkaline earth metal' },
'Tl': { name: 'Thallium', mass: 204.3833, atomic: 73, group: 5, period: 6, block: 'd', state: 'Solid', occurance: 'Primordial', desc: 'Transition metal' },
'Tm': { name: 'Thulium', mass: 168.93421, atomic: 65, group: 3, period: 6, block: 'f', state: 'Solid', occurance: 'Primordial', desc: 'Lanthanide' },
'U': { name: 'Uranium', mass: 238.0289, atomic: 43, group: 7, period: 5, block: 'd', state: 'Solid', occurance: 'Transient', desc: 'Transition metal' },
'Ubb': { name: 'Unbibium', mass: 0, atomic: 52, group: 16, period: 5, block: 'p', state: 'Solid', occurance: 'Primordial', desc: 'Metalloid' },
'Ubh': { name: 'Unbihexium', mass: 0, atomic: 90, group: 3, period: 7, block: 'f', state: 'Solid', occurance: 'Primordial', desc: 'Actinide' },
'Ubn': { name: 'Unbinilium', mass: 0, atomic: 22, group: 4, period: 4, block: 'd', state: 'Solid', occurance: 'Primordial', desc: 'Transition metal' },
'Ubp': { name: 'Unbipentium', mass: 0, atomic: 81, group: 13, period: 6, block: 'p', state: 'Solid', occurance: 'Primordial', desc: 'Metal' },
'Ubq': { name: 'Unbiquadium', mass: 0, atomic: 69, group: 3, period: 6, block: 'f', state: 'Solid', occurance: 'Primordial', desc: 'Lanthanide' },
'Ubt': { name: 'Unbitrium', mass: 0, atomic: 117, group: 17, period: 7, block: 'p', state: '', occurance: 'Synthetic', desc: '' },
'Ubu': { name: 'Unbiunium', mass: 0, atomic: 92, group: 3, period: 7, block: 'f', state: 'Solid', occurance: 'Primordial', desc: 'Actinide' },
'Uue': { name: 'Ununnenium', mass: 0, atomic: 122, group: 4, period: 8, block: '', state: '', occurance: '', desc: '' },
'Cn': { name: 'Copernicium', mass: 277, atomic: 126, group: 8, period: 8, block: 'g', state: '', occurance: 'Synthetic', desc: '' },
'Lv': { name: 'Livermorium', mass: 0, atomic: 120, group: 2, period: 8, block: 's', state: '', occurance: 'Synthetic', desc: '' },
'Og': { name: 'Oganesson', mass: 0, atomic: 125, group: 7, period: 8, block: '', state: '', occurance: '', desc: '' },
'Mc': { name: 'Moscovium', mass: 0, atomic: 124, group: 6, period: 8, block: '', state: '', occurance: '', desc: '' },
'Fl': { name: 'Flerovium', mass: 0, atomic: 123, group: 5, period: 8, block: '', state: '', occurance: '', desc: '' },
'Ts': { name: 'Tennessine', mass: 0, atomic: 121, group: 3, period: 8, block: '', state: '', occurance: '', desc: '' },
'Nh': { name: 'Nihonium', mass: 0, atomic: 119, group: 1, period: 8, block: 's', state: '', occurance: 'Synthetic', desc: '' },
'V': { name: 'Vanadium', mass: 50.9415, atomic: 23, group: 5, period: 4, block: 'd', state: 'Solid', occurance: 'Primordial', desc: 'Transition metal' },
'W': { name: 'Tungsten', mass: 183.85, atomic: 74, group: 6, period: 6, block: 'd', state: 'Solid', occurance: 'Primordial', desc: 'Transition metal' },
'Xe': { name: 'Xenon', mass: 131.29, atomic: 54, group: 18, period: 5, block: 'p', state: 'Gas', occurance: 'Primordial', desc: 'Noble gas' },
'Y': { name: 'Yttrium', mass: 88.90585, atomic: 39, group: 3, period: 5, block: 'd', state: 'Solid', occurance: 'Primordial', desc: 'Transition metal' },
'Yb': { name: 'Ytterbium', mass: 173.04, atomic: 70, group: 3, period: 6, block: 'f', state: 'Solid', occurance: 'Primordial', desc: 'Lanthanide' },
'Zn': { name: 'Zinc', mass: 65.39, atomic: 30, group: 12, period: 4, block: 'd', state: 'Solid', occurance: 'Primordial', desc: 'Transition metal' },
'Zr': { name: 'Zirconium', mass: 91.224, atomic: 40, group: 4, period: 5, block: 'd', state: 'Solid', occurance: 'Primordial', desc: 'Transition metal' },
};

let compoundLookup = [
{ name: 'Water', formula: 'H2O' },
{ name: 'Glucose', formula: 'C6H12O6' },
{ name: 'Sucrose', formula: 'C12H22O11' },
{ name: 'Hydrochloric Acid', formula: 'HCl' },
{ name: 'Nitric Acid', formula: 'HNO3' },
{ name: 'Sulfuric Acid', formula: 'H2SO4' },
{ name: 'Octane', formula: 'C8H18' },
{ name: 'Baking Soda', formula: 'NaHCO3' },
{ name: 'Methane', formula: 'CH4' },
{ name: 'Ammonia', formula: 'NH3' },
{ name: 'Benzene', formula: 'C6H6' },
{ name: 'Ethanol', formula: 'C2H5OH' },
{ name: 'Hydrogen Peroxide', formula: 'H2O2' },
{ name: 'Acetic Acid', formula: 'CH3COOH' },
{ name: 'Methanol', formula: 'CH3OH' },
{ name: 'Buckminsterfullerene', formula: 'C60' },
{ name: 'Ethylene', formula: 'C2H4' },
{ name: 'Acetone', formula: 'C3H6O' },
{ name: 'Butane', formula: 'C4H10' },
{ name: 'Citric Acid', formula: 'C6H8O7' },
{ name: 'Tetrahydrofuran', formula: 'C4H8O' },
{ name: 'Hexane', formula: 'C6H14' },
{ name: 'Propane', formula: 'C3H8' },
{ name: 'Vinegar', formula: 'C2H4O2' },
{ name: 'Camphor', formula: 'C10H16O' },
{ name: 'Table Salt', formula: 'NaCl' },
{ name: 'Silica', formula: 'SiO2' },
{ name: 'Hydroxide', formula: 'OH' },
{ name: 'Ozone', formula: 'O3' },
{ name: 'Rust', formula: 'Fe2O3' },
{ name: 'Quicklime', formula: 'CaO' },
{ name: 'Limestone', formula: 'CaCO3' },
{ name: 'Carbonate', formula: 'CO3' },
{ name: 'Bicarbonate', formula: 'HCO3' },
{ name: 'Phosphate', formula: 'PO4' },
{ name: 'Ammonium', formula: 'NH4' },
{ name: 'Cyanide', formula: 'CN' },
{ name: 'Nitrate', formula: 'NO3' },
{ name: 'Toluene', formula: 'C7H8' },
{ name: 'Sulfate', formula: 'SO4' },
{ name: 'Chiolite', formula: 'Al3F14Na5' },
{ name: 'Cryolite', formula: 'AlF6Na3' },
{ name: 'Andalusite', formula: 'Al2O5Si' },
{ name: 'Mullite', formula: 'Al6O13Si2' },
{ name: 'Arsine', formula: 'AsH3' },
{ name: 'Borazine', formula: 'B3N3H6' },
{ name: 'Gillespite', formula: 'BaFeSi4O10' },
{ name: 'Barite', formula: 'BaSO4' },
{ name: 'Chloroform', formula: 'CHCl3' },
{ name: 'Silica Aerogel', formula: 'C23H22N2O3S2' },
{ name: 'Lactose', formula: 'C12H22O11' },
{ name: 'Barrelene', formula: 'C8H8' },
{ name: 'Dodecahedrane', formula: 'C20H20' },
{ name: 'Housane', formula: 'C5H8' },
{ name: 'Prismane', formula: 'C6H6' },
{ name: 'Quadratic Acid', formula: 'C4H2O4' },
{ name: 'Bullvalene', formula: 'C10H10' },
{ name: 'Dickite', formula: 'Al2Si2O5(OH)4' },
{ name: 'Penguinone', formula: 'C10H14O' },
{ name: 'Zeise\'s Salt', formula: 'C2H6Cl3KOPt' },
{ name: 'Xenic Acid', formula: 'H2XeO4' },
{ name: 'Pyrophosphoric Acid', formula: 'H4P2O7' },
{ name: 'Phosphorous Acid', formula: 'H3PO3' },
{ name: 'Metaphosphoric Acid', formula: 'HPO3' },
{ name: 'Hypophosphoric Acid', formula: 'H4P2O6' },
{ name: 'Yohimbine (Hydrochloride)', formula: 'C21H26N2O3' },
{ name: 'Fluorosulfuric Acid', formula: 'FSO3H' },
{ name: 'Formaldehyde', formula: 'CH2O' },
{ name: 'Fluorene', formula: 'C13H10' },
{ name: 'Ferrocene', formula: 'C10H10Fe' },
{ name: 'Abietic Acid', formula: 'C20H30O2' },
{ name: 'Fructose', formula: 'C6H12O6' },
{ name: 'Formic Acid', formula: 'HCOOH' },
{ name: 'Valine', formula: 'C5H11NO2' },
{ name: 'Vanillin', formula: 'C8H8O3' },
{ name: 'Veratraldehyde', formula: 'C9H10O3' },
{ name: 'Lactic Acid', formula: 'C3H6O3' },
{ name: 'Lysine', formula: 'C6H14N2O2' },
{ name: 'Leucine', formula: 'C6H13NO2' },
{ name: 'Galactose', formula: 'C6H12O6' },
{ name: 'Glutamic Acid', formula: 'C5H9NO4' },
{ name: 'Glycerol', formula: 'C3H8O3' },
{ name: 'Glycine', formula: 'C2H5NO2' },
{ name: 'Caffeine', formula: 'C8H10N4O2' },
{ name: 'Cacodylic Acid', formula: 'C2H7AsO2' },
{ name: 'Cadaverine', formula: 'C5H14N2' },
{ name: 'Decaborane', formula: 'B10H14' },
{ name: 'Epinephrine', formula: 'C9H13NO3' },
{ name: 'Ethane', formula: 'C2H6' },
{ name: 'Ethene', formula: 'C2H4' },
{ name: 'Urea', formula: 'CH4N2O' },
{ name: 'Uric Acid', formula: 'C5H4N4O3' },
{ name: 'Ibuprofen', formula: 'C13H18O2' },
{ name: 'Iodic Acid', formula: 'HIO3' },
{ name: 'Isopropyl Alcohol', formula: 'C3H8O' },
{ name: 'Isopropanol', formula: 'C3H8O' },
{ name: 'Isoprene', formula: 'C5H8' },
{ name: 'Isoleucine', formula: 'C6H13NO2' },
{ name: 'Isoborneol', formula: 'C10H18O' },
{ name: 'Benzil', formula: '(C6H5CO)2' },
{ name: 'Benzoic Acid', formula: 'C7H6O2' },
{ name: 'Benzoin', formula: 'C14H12O2' },
{ name: 'Benzyl Alcohol', formula: 'C6H5CH2OH' },
{ name: 'Orthophosphoric Acid', formula: 'H3PO4' },
{ name: 'Maltose', formula: 'C12H22O11' }
];

// Sort by alphabetical order of name
compoundLookup = compoundLookup.sort(function(a, b) {
  var nameA = a.name.toLowerCase();
  var nameB = b.name.toLowerCase();

  if (nameA < nameB) {
    return -1;
  }

  if (nameA > nameB) {
    return 1;
  }

  return 0;
});

// window.periodicLookupKeys = Object.keys(window.lookup);

let scriptsLookup = {'\u2080': '0', '\u2081': '1', '\u2082': '2', '\u2083': '3', '\u2084': '4', '\u2085': '5', '\u2086': '6', '\u2087': '7', '\u2088': '8', '\u2089': '9', '\u2070': '0', '\u00B9': '1', '\u00B2': '2', '\u00B3': '3', '\u2074': '4', '\u2075': '5', '\u2076': '6', '\u2077': '7', '\u2078': '8', '\u2079': '9', '\u208A': '+', '\u208B': '-'};
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

let settingSimplify = true;
let settingReverse = true;
let settingInstallPrompts = true;
let settingAutoSubscript = true;

let f = document.getElementById('formula');
f.focus();

document.onkeydown = function() {
  let focusedId = document.activeElement.id;

  if (focusedId !== 'compound-search' && focusedId !== 'formula') {
    f.focus();
  }
};

function evalExp(s) {
  let m = s.replace(/\s/g, '').match(/[+\-]?([0-9\.]+)/g) || [];

  if (m.length < 1) {
    return NaN;
  }

  return m.reduce(function(sum, value) {
      return parseFloat(sum) + parseFloat(value);
    });
}

function simplifyFormula(formula) {
  let symbols = formula.split(/(?=[A-Z\(\)])/);

  let multi = [];
  let next = 0;

  let clone = [];

  for (let i = symbols.length - 1; i >= 0; i--) {
    if (symbols[i][0] === "(") {
      if (symbols[i] !== "(") {
        let num = evalExp(symbols[i].slice(1));
        num = isNaN(num) ? 1 : num;

        next = num - 1;
      }

      if (multi.length === 0) {
        return [false, ['', 'Brackets not ending']];
      }

      multi.pop();
    } else if (symbols[i][0] === ")") {
      let num = evalExp(symbols[i].slice(1));
      num = isNaN(num) ? 1 : num;

      multi.push(num);
    } else {
      let split = symbols[i].split(/(?=[0-9])/);

      let exp = split.slice(1).join('');

      let num = evalExp(exp);
      num = isNaN(num) ? 1 : num;

      let mul = multi.reduce((a, b) => a * b, 1);
      mul = mul === 0 ? 1 : mul;

      let final = (num * mul) + next;
      final = final === 1 ? '' : final;
      final = final.toString();

      clone.unshift(split[0] + final);

      next = 0;
    }
  }

  if (multi.length > 0) {
    return [false, ['', 'Brackets not opening']];
  }

  return [clone.slice(0), clone.join('')];
}

function getCompoundByName(name) {
  return compoundLookup.find(c => c.name.toLowerCase() === name.toLowerCase());
}

function getCompoundByFormula(formula) {
  return compoundLookup.filter(c => c.formula === formula);
}

function processFormula(formula, subprocess) {
  formula = unsubscriptise(formula);

  formula = formula.replace(/[^a-z0-9 \(\)\+\-]/gmi, '');

  let reverseElement = Object.values(periodicLookup).find(({ name }) => name.toLowerCase() === formula.toLowerCase());

  if (reverseElement !== undefined) {
    let reverseSymbol = Object.keys(periodicLookup)[Object.values(periodicLookup).indexOf(reverseElement)];

    // visualiseAtom(reverseElement.atomic);

    return [reverseSymbol, reverseElement.mass];
  }

  let reverseCompound = getCompoundByName(formula);

  if (reverseCompound !== undefined) {
    let processed = processFormula(reverseCompound.formula);

    return [`${subscriptise(reverseCompound.formula)} - ${processed[0].split(' - ')[1]}`, processed[1]];
  }

  formula = formula.replace(/ /g, '');

  let symbols = simplifyFormula(formula);

  if (symbols[0] == false) {
    return symbols[0] === false ? symbols : ['', ''];
  }

  symbols = symbols[0];

  let elements = [];
  let names = [];
  let masses = {};
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

        masses[s] = (masses[s] || 0) + el.mass;

        elements.push(el);
    }
  }

  if (fail) { return [false, [fail, ' is not recongised']]; }

  if (elements.length >= 10000) {
    return [false, [elements.length, ' is over the element processing limit']];
  }

  let percents = [];

  let massesKeys = Object.keys(masses);

  for (let i = 0; i < massesKeys.length; i++) {
    let k = massesKeys[i];

    percents.push({symbol: k, name: periodicLookup[k].name, percent: masses[k] / totalMass * 100, mass: masses[k]});;
  }

  percents = percents.sort((a, b) => b.percent - a.percent);

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
    let compounds = getCompoundByFormula(formula).map((e) => e.name);

    if (compounds.length > 0) {
      namesFinal = `${compounds.join(' / ')} - ${namesFinal}`;
    }

    /*for (let i = 0; i < compoundLookup.length; i++) {
      let p = processFormula(compoundLookup[i].formula, false);

      if (namesFinal === p[0]) {
        namesFinal = `${compoundLookup[i].formula} - ${namesFinal}`;
        break;
      }
    }*/

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

  namesFinal = namesFinal === [''] ? '' : namesFinal;

  return [namesFinal, totalMass === 0 ? '' : parseFloat(totalMass.toPrecision(5)), percents];
}

f.onkeypress = function(e) {
  if (e.key === 'Enter') {
    let formula = f.value;

    formula = unsubscriptise(formula);

    formula = formula.replace(/[^a-z0-9 \(\)]/gmi, '');

    if (settingReverse === true) {
      let reversed = processFormula(formula)[0];

      if (reversed !== false) {
        reversed = reversed.split(' - ')[0];

        if (reversed.indexOf('*') === -1 && (reversed.indexOf('-') !== -1 || reversed.indexOf(' ') === -1)) {
          formula = reversed;
        }
      }
    }

    if (settingSimplify === true) {
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

function unsubscriptise(value) {
  for (let i = 0; i < scriptsLookupKeys.length; i++) {
    value = value.replace(new RegExp(scriptsLookupKeys[i], 'gm'), scriptsLookup[scriptsLookupKeys[i]]);
  }

  return value;
}

function subscriptise(value) {
  for (let i = 0; i < scriptsLookupKeys.length; i++) {
    let escape = false;
    escape = scriptsLookup[scriptsLookupKeys[i]] === '+' ? true : escape;
    escape = scriptsLookup[scriptsLookupKeys[i]] === '-' ? true : escape;

    value = value.replace(new RegExp((escape === true ? '\\' : '') + scriptsLookup[scriptsLookupKeys[i]], 'gm'), scriptsLookupKeys[i]);
  }

  return value;
}

function interpretInput() {
  let value = f.value;

  if (settingAutoSubscript === true) {
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

  if (body !== undefined && body !== '') {
    let bodyPreDash = body.split(' - ')[0];
    let bodySplit = bodyPreDash.replace(' ', '').replace('*', '').split(/(?=[A-Z/])/);

    for (let i = 0; i < bodySplit.length; i++) {
      // body = body.replace(bodySplit[i], `<div id="element">${bodySplit[i]}</div>`);
    }
  }

  document.getElementById("elements-body").innerText = body;
  document.getElementById("mass").innerText = result[1];

  if (result[2].length < 2) {
    return;
  }

  let popup = document.createElement('div');
  popup.id = 'mass-popup';

  console.log(result[2]);

  for (let i = 0; i < result[2].length; i++) {
    let o = result[2][i];

    let e = document.createElement('div');
    e.className = 'mass-popup-row';

    let eEl = document.createElement('div');
    eEl.className = 'mass-popup-row-element';
    eEl.innerText = `${o.name} (${o.symbol})`;

    let eRight = document.createElement('div');
    eRight.className = 'mass-popup-row-right';
    eRight.innerText = Math.round(o.percent) + '%';

    e.appendChild(eEl);
    e.appendChild(eRight);

    popup.appendChild(e);
  }

  document.getElementById('mass').prepend(popup);
}

f.oninput = function() {
  interpretInput();
}

document.onclick = function(e) {
    // console.log(e);

    // document.getElementById('formula').focus();
};

document.getElementById("refresh").onclick = function() {
  window.location.href = window.location.href;
};

document.getElementById("install").onclick = function() {
  showSnackbar();

  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt

  deferredPrompt.userChoice
    .then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
};

document.getElementById("no-snackbar").onclick = function() {
  showSnackbar();
};

let snackbars = ["update", "install"];

function showSnackbar(name) {
  let c = document.getElementById("snackbar").className;

  document.getElementById("snackbar").className = "";

  if (name !== undefined) {
    setTimeout(function() {
      for (const s of snackbars.filter(x => x !== name)) {
        document.getElementById(`snackbar-${s}`).className = "";
      }

      document.getElementById("snackbar").className = "show";

      document.getElementById("snackbar-" + name).className = "show";
    }, c === "" ? 0 : 1000);
  }
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 76 and later from showing the mini-infobar
  e.preventDefault();

  // Stash the event so it can be triggered later.
  deferredPrompt = e;

  checkToShowInstallPrompt();
});

function checkToShowInstallPrompt() {
  if (settingInstallPrompts !== true) {
    return;
  }

  if (localStorage.getItem('asked') === null) { // First time
    localStorage.setItem('asked', Date.now());

    setTimeout(showInstallPrompt, 60000);
    return;
  }

  if (Date.now() - localStorage.getItem('asked') > 86400000) { // Only ask daily
    showInstallPrompt();
  }
}

function showInstallPrompt() {
  localStorage.setItem('asked', Date.now());

  showSnackbar("install");
}

document.getElementById("options-drawer").onclick = function() {
  togglePanel('options');
};

document.getElementById("compounds-drawer").onclick = function() {
  togglePanel('compounds');

  if (document.getElementById('compounds').className === 'show') {
    setTimeout(function() { document.getElementById('compound-search').focus(); }, 600);
  }
};

document.getElementById("install-switch").onchange = function() {
  settingInstallPrompts = document.getElementById("install-switch").checked;
};

document.getElementById("autosub-switch").onchange = function() {
  settingAutoSubscript = document.getElementById("autosub-switch").checked;
};

document.getElementById("simplify-switch").onchange = function() {
  settingSimplify = document.getElementById("simplify-switch").checked;
};
document.getElementById("reverse-switch").onchange = function() {
  settingReverse = document.getElementById("reverse-switch").checked;
};

function togglePanel(id) {
  let parent = document.getElementById(id);

  if (parent.className === '') {
    showPanel(id);
  } else {
    hidePanel(id);
  }
}

function showPanel(id) {
  let parent = document.getElementById(id);

  parent.className = 'show';
}

function hidePanel(id) {
  let parent = document.getElementById(id);

  parent.className = '';
}

function generateThroughSearchRegex(s) {
  return new RegExp(s.toLowerCase().split('').join('.*'))
}

function searchText(toSearch, toFind, method, caseSensitive) {
  method = method === undefined ? 'index' : method;

  toSearch = caseSensitive === true ? toSearch : toSearch.toLowerCase();
  toFind = caseSensitive === true ? toFind : toFind.toLowerCase();

  if (method === 'index') {
    return toSearch.indexOf(toFind) !== -1;
  }

  if (method === 'through') {
    let searchRegex = typeof toFind === 'string' ? generateThroughSearchRegex(toFind) : toFind;

    return toSearch.match(searchRegex) !== null;
  }
}

function generateCompoundList(search, sort) {
  search = search === undefined ? '' : search;
  sort = sort === undefined ? 'abc' : sort;

  document.getElementById('compound-list').innerHTML = '';

  let searchRegex = generateThroughSearchRegex(search);

  let compounds = compoundLookup.filter((x) => searchText(x.name, search, 'index', false));

  if (sort === 'zyx') {
    compounds = compounds.sort(function(a, b) {
      var nameA = a.name.toLowerCase();
      var nameB = b.name.toLowerCase();

      if (nameA > nameB) {
        return -1;
      }

      if (nameA < nameB) {
        return 1;
      }

      return 0;
    });
  }

  for (let i = 0; i < compounds.length; i++) {
    let el = document.createElement('button');
    el.innerText = compounds[i].name;

    el.onclick = function() {
      document.getElementById('formula').value = compounds[i].formula;
      interpretInput();
    };

    document.getElementById('compound-list').appendChild(el);
  }

  let el = document.createElement('button');
  el.id = 'compound-list-results';
  el.disabled = true;

  let ending = compounds.length > 1 ? 's' : '';

  el.innerText = `${compounds.length} compound${ending}`;

  document.getElementById('compound-list').appendChild(el);
}

function compoundSearch() {
  generateCompoundList(document.getElementById('compound-search').value, document.getElementById('compound-sort').value);
}

document.getElementById('compound-search').oninput = function() {
  compoundSearch();
};

document.getElementById('compound-sort').oninput = function() {
  compoundSearch();
};

generateCompoundList();

let leftDrag = false;
let rightDrag = false;
let topDrag = false;
let bottomDrag = false;

let lastTouchX = 0;
let lastTouchY = 0;

let startTouchX = 0;
let startTouchY = 0;

let maxTouchAcceleration = 0;

let deviceWidthOnePercent = document.body.clientWidth / 100;
let deviceHeightOnePercent = document.body.clientHeight / 100;

document.ontouchstart = function(e) {
  startTouchX = e.touches[0].pageX;
  startTouchY = e.touches[0].pageY;

  lastTouchX = startTouchX;
  lastTouchY = startTouchY;
};

document.ontouchmove = function(e) {
  let x = e.touches[0].pageX;
  let y = e.touches[0].pageY;

  let accX = lastTouchX - x;
  let accY = lastTouchY - y;

  let normalisedAccX = accX < 0 ? accX * -1 : accX;
  let normalisedAccY = accY < 0 ? accY * -1 : accY;

  let maxAccDiffX = maxTouchAcceleration - normalisedAccX;
  let maxAccDiffY = maxTouchAcceleration - normalisedAccY;

  if (maxAccDiffX < 0 && maxAccDiffY > maxAccDiffX) {
    if (accX < 0) {
      rightDrag = true;

      leftDrag = false;
      topDrag = false;
      bottomDrag = false;
    } else {
      leftDrag = true;

      rightDrag = false;
      topDrag = false;
      bottomDrag = false;
    }
  } else {
    if (maxAccDiffY < 0) {
      if (accY < 0) {
        bottomDrag = true;

        rightDrag = false;
        leftDrag = false;
        topDrag = false;
      } else {
        topDrag = true;

        leftDrag = false;
        rightDrag = false;
        bottomDrag = false;
      }
    }
  }

  if (maxAccDiffX < 0 && maxAccDiffX > maxAccDiffY) {
    maxTouchAcceleration = normalisedAccX;
  } else {
    if (maxAccDiffY < 0) {
      maxTouchAcceleration = normalisedAccY;
    }
  }

  lastTouchX = x;
  lastTouchY = y;
};

function coordInRect(x, y, rect) {
  return (x > rect.x && x < rect.x + rect.width) && (y > rect.y && y < rect.y + rect.height);
}

document.ontouchend = function(e) {
  let x = e.changedTouches[0].pageX;
  let y = e.changedTouches[0].pageY;

  let compoundsRect = document.getElementById('compounds-panel').getBoundingClientRect();

  if (!rightDrag && document.getElementById('compounds').className === 'show' && coordInRect(x, y, compoundsRect)) {
    console.log('compounds');
    return;
  }

  let optionsRect = document.getElementById('options-panel').getBoundingClientRect();

  if (!topDrag && document.getElementById('options').className === 'show' && coordInRect(x, y, optionsRect)) {
    console.log('options');
    return;
  }

  /*if (!rightDrag && document.getElementById('compounds').className === 'show' && (x > document.body.clientWidth - 210 && x < document.body.clientWidth - 10) && (y > (document.body.clientHeight / 2) - 200 && y < (document.body.clientHeight / 2) + 200)) {
    console.log('compounds');
    return;
  }*/

  /*if (!bottomDrag && document.getElementById('compounds').className === 'show' && (x > document.body.clientWidth - 210 && x < document.body.clientWidth - 10) && (y > (document.body.clientHeight / 2) - 200 && y < (document.body.clientHeight / 2) + 200)) {
    console.log('options');
    return;
  }*/

  console.log(leftDrag, rightDrag, topDrag, bottomDrag);

  if (leftDrag) {
    showPanel('compounds');
  }

  if (rightDrag) {
    hidePanel('compounds');
  }

  if (bottomDrag) {
    showPanel('options');
  }

  if (topDrag) {
    hidePanel('options');
  }

  startTouchX = 0;
  startTouchY = 0;

  lastTouchX = 0;
  lastTouchY = 0;

  maxTouchAcceleration = 0;

  rightDrag = false;
  leftDrag = false;
  topDrag = false;
  bottomDrag = false;
};

registerSW();

async function registerSW() {
  if (location.hostname === 'localhost' || location.hostname === '127.0.0.1' || location.hostname === '') {
    return false; // Disallow registering service worker on localhost
  }

  if ('serviceWorker' in navigator) {
    try {
      /* navigator.serviceWorker.getRegistrations().then(function(registrations) {
        for (let i = 0; i < registrations.length; i++) {
          registrations[i].unregister().then(function(success) {
            //updateSnackbar.open();
          });
        }
      }); */

      navigator.serviceWorker.register('/sw.js').then(reg => {
        reg.addEventListener('updatefound', () => {
          newWorker = reg.installing;

          newWorker.addEventListener('statechange', () => {
            switch (newWorker.state) {
              case 'installed':
                if (navigator.serviceWorker.controller) {
                  showSnackbar("update"); // Show Update Prompt
                }

                break;
            }
          });
        });
      });
    } catch(e) {
      console.warn('SW registration failed');
    }
  }
}


function updateLayout(listItems) {
  for (var i = 0; i < listItems.length; i++) {
    let offsetAngle = 360 / listItems.length;
    let rotateAngle = offsetAngle * i;

    let size = listItems[0].parentNode.offsetWidth;
    size /= 2.025;

    let r = parseFloat(listItems[0].parentNode.id.replace('ring-', ''));

    let m = listItems.length - 1;

    let o = (-(1 / Math.pow(m / 2, 2)) * Math.pow(i - m, 2) + 4) / 4;
    o *= (1.5 * (r - 1));
    o *= 1.5;

    console.log(i, r, m, Math.round(o), size);

    size += o;

    size = Math.round(size);

    console.log(listItems[0].parentNode.id, listItems[0].parentNode.offsetWidth, size);

    listItems[i].style.transform = `rotate(${rotateAngle}deg) translate(0, -${size}px) rotate(-${rotateAngle}deg)`;
  }
}

function addElectron(par) {
  let el = document.createElement('li');
  el.className = 'electron';

  par.appendChild(el);

  updateLayout([].slice.call(par.children));

  return el;
}

function addRing(par, n) {
  let el = document.createElement('ul');
  el.className = 'ring';
  el.id = `ring-${n}`;

  par.appendChild(el);

  return el;
}

function addNucleus(par) {
  let el = document.createElement('div');
  el.id = 'nucleus';

  par.appendChild(el);

  return el;
}

function getRing(electron) {
  let o = 0;

  for (let i = 1; i < 9999; i++) {
    let c = Math.pow(i, 2) * 2;

    if (electron <= o + c) {
      return i;
    }

    o += c;
  }
}

function visualiseAtom(electronCount) {
  if (electronCount < 1) {
    return;
  }

  let parent = document.getElementById('visualisation');
  parent.innerHTML = '';

  let nucleus = addNucleus(parent);

  let ringCount = getRing(electronCount);

  let rings = [];

  for (let i = 1; i <= ringCount; i++) {
    rings.push(addRing(parent, i));
  }

  for (let i = 1; i <= electronCount; i++) {
    let ring = getRing(i);

    addElectron(rings[ring - 1]);
  }

  for (let i = 0; i < ringCount; i++) {
    updateLayout(rings[i]);
  }
}
