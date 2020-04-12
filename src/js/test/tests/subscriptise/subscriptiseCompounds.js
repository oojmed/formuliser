import { subscriptise } from '/js/utils/subscriptise';

function test() {
  let tests = [
    inTest('Water', 'H2O', 'H₂O'),
    inTest('Buckminsterfullerene', 'C60', 'C₆₀'),
    inTest('Chiolite', 'Al3F14Na5', 'Al₃F₁₄Na₅'),
    inTest('Benzyl Alcohol', 'C6H5CH2OH', 'C₆H₅CH₂OH'),
    inTest('Table Salt', 'NaCl', 'NaCl')
  ];

  return tests;
}

function inTest(name, given, expected) {
  return {name, given, expected, result: subscriptise(given)};
}

let info = {
  run: test,
  name: 'Subscriptise - Compounds'
};

export default info;