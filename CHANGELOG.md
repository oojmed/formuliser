# Formuliser Changelog

#### Changelog Notes
> Regex used to replace compounds in code to compounds in markdown: `\{ name: '(.*)', formula: '(.*)' \},` to find and then using `  - $1 ($2)` to replace

---

## v12

(WIP)


## v11

### Features
- Added swipe support for showing and hiding panels (v11 rc1)


## v10

### Features
- **Added sorting options to compound search**: (v10 rc1)
    - Abc (Alphabetical)
    - Zyx (Reverse Alphabetical)
- 'Fix' formula for ethanol (v10 rc2)
- Fix some formatting in code (v10 rc2)
- Autofocus on compound search when compound panel drawn (v10 rc2)
- ~~Use new search method for searching compounds~~ Implement new search system in backend (but still using the old method for now) (v10 rc3, rc4)
- Added 15 new compounds (90 > 105 total) - Over 100, yay! (v10 rc5)
  - Urea (CH4N2O)
  - Uric Acid (C5H4N4O3)
  - Ibuprofen (C13H18O2)
  - Iodic Acid (HIO3)
  - Isopropyl Alcohol (C3H8O)
  - Isopropanol (C3H8O)
  - Isoprene (C5H8)
  - Isoleucine (C6H13NO2)
  - Isoborneol (C10H18O)
  - Benzil ((C6H5CO)2)
  - Benzoic Acid (C7H6O2)
  - Benzoin (C14H12O2)
  - Benzyl Alcohol (C6H5CH2OH)
  - Orthophosphoric Acid (H3PO4)
  - Maltose (C12H22O11)


## v9

### Features
- Rewrote compounds system to allow several compounds with the same formula
- Added 31 new compounds (59 > 90 total): (- there has been a miscalculation in the total of the last updates)
  - Zeise\'s Salt (C2H6Cl3KOPt)
  - Xenic Acid (H2XeO4)
  - Pyrophosphoric Acid (H4P2O7)
  - Phosphorous Acid (H3PO3)
  - Metaphosphoric Acid (HPO3)
  - Hypophosphoric Acid (H4P2O6)
  - Yohimbine (Hydrochloride) (C21H26N2O3)
  - Fluorosulfuric Acid (FSO3H)
  - Formaldehyde (CH2O)
  - Fluorene (C13H10)
  - Ferrocene (C10H10Fe)
  - Abietic Acid (C20H30O2)
  - Fructose (C6H12O6)
  - Formic Acid (HCOOH)
  - Valine (C5H11NO2)
  - Vanillin (C8H8O3)
  - Veratraldehyde (C9H10O3)
  - Lactic Acid (C3H6O3)
  - Lysine (C6H14N2O2)
  - Leucine (C6H13NO2)
  - Galactose (C6H12O6)
  - Glutamic Acid (C5H9NO4)
  - Glycerol (C3H8O3)
  - Glycine (C2H5NO2)
  - Caffeine (C8H10N4O2)
  - Cacodylic Acid (C2H7AsO2)
  - Cadaverine (C5H14N2)
  - Decaborane (B10H14)
  - Epinephrine (C9H13NO3)
  - Ethane (C2H6)
  - Ethene (C2H4)
- Remade changelog compound regex (see top)
- Made compounds panel larger (width)
- Added results to bottom of the compound search stating how many compounds appeared in the results


## v8

### Features
- Added 10 new compounds (50 > 60 total):
  - Silica aerogel (C23H22N2O3S2)
  - Lactose (C12H22O11)
  - Barrelene (C8H8)
  - Dodecahedrane (C20H20)
  - Housane (C5H8)
  - Prismane (C6H6)
  - Quadratic Acid (C4H2O4)
  - Bullvalene (C10H10)
  - Dickite (Al2Si2O5(OH)4)
  - Penguinone (C10H14O)
- Added compound panel with:
    - Compound search
    - List of compounds
- Added option for auto subscriptise (still enabled by default)
- Added 'No' option to install snackbar

### Changes
- Make options size constant for large (600px+) size


## v7

### Features
- Added support for arthimetic in numbers eg: CO2+1
- Use subscript when showing formula for compounds when reversing
- Auto subscript +'s and -'s
- Added panel at top
    - Moved info into panel
- Added new on enter features:
    - Reverse
    - Simplify
- Now show the element's symbol when doing a reverse symbol lookup
- Added missing elements:
    - Unbibium
    - Unbihexium
    - Unbipentium
    - Unbiquadium
    - Unbitrium

## v6.0.0

### Features
- PWA

### Changes
- Links now have nice(r) colors
- Information and mass offsets are now in pixels and not percentages
- Information is now in the top right corner
- Updated UI to have colder and less bright darks
- Show formula when typing in a compound name
- Reposition the formula to be higher
- No longer focus on input immediately when it loses focus, as this disallows highlighting text, now only focus on key press
- Small QOL and accessibility improvements

### Fixes
- Fixed bracket multipliers adding instead of multiplying


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