# Formuliser Changelog

#### Changelog Notes
> Regex used to replace compounds in code to compounds in markdown: `'(.*)': '(.*)',` to find and then using `  - $2 ($1)` to replace

---

## v5.0.0

### Features
- Added support for brackets

### Fixes
- Don't crash if the number of elements doesn't have a number prefix
- Don't lose / reset the cursor position when updating the value of the formula input


## v4.0.0

### Features
- Completely remade / revamped the procedural compound name generation system
- Added a limit for processing elements (10000) to stop crashes
- Added **24** new compounds (26 > 50 total):
  - Silica (SiO2)
  - Hydroxide (OH)
  - Ozone (O3)
  - Rust (Fe2O3)
  - Quicklime (CaO)
  - Limestone (CaCO3)
  - Carbonate (CO3)
  - Bicarbonate (HCO3)
  - Phosphate (PO4)
  - Ammonium (NH4)
  - Cyanide (CN)
  - Nitrate (NO3)
  - Toluene (C7H8)
  - Sulfate (SO4)
  - Chiolite (Al3F14Na5)
  - Cryolite (AlF6Na3)
  - Andalusite (Al2O5Si)
  - Mullite (Al6O13Si2)
  - Chiolite (Al3F14Na5)
  - Arsine (AsH3)
  - Borazine (B3N3H6)
  - Gillespite (BaFeSi4O10)
  - Barite (BaSO4)
  - Chloroform (CHCl3)

### Changes
- Slightly change description in HTML meta
- Made elements / information below the formula be `40% + 120px` (120px below the formula)

### Fixes
- Changed changelog regex to remove commas from compound list


## v3.0.0

### Features
- Added support for reverse elements
- Added support reverse compounds
- Added procedural compound name generation (only with 2 elements for now)
- Updated format of how compounds are shown
- Added **20** new compounds (6 > 26 total):
  - Octane (C8H18)
  - Baking Soda (NaHCO3)
  - Methane (CH4)
  - Ammonia (NH3)
  - Benzene (C6H6)
  - Ethanol (C2H6O)
  - Hydrogen Peroxide (H2O2)
  - Acetic Acid (CH3COOH)
  - Methanol (CH3OH)
  - Buckminsterfullerene (C60)
  - Ethylene (C2H4)
  - Acetone (C3H6O)
  - Butane (C4H10)
  - Citric Acid (C6H8O7)
  - Tetrahydrofuran (C4H8O)
  - Hexane (C6H14)
  - Propane (C3H8)
  - Vinegar (C2H4O2)
  - Camphor (C10H16O)
  - Salt (NaCl)

### Fixes
- Made information in the bottom right behind everything else


## v2.1.0

### Features
- Added version and information to bottom right
- Added errors


## v2.0.0

### Features
- Renamed to Formuliser
- Added support for compounds
- Auto subscript numbers
- Added elements with unknown masses:
    - Unbinilium
    - Unbiunium
    - Ununnenium
    - Livermorium
    - Oganesson
    - Moscovium
    - Flerovium
    - Tennessine
    - Nihonium


## v1.0.0

Initial Release