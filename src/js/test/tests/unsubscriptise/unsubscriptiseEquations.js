import { unsubscriptise } from '/js/utils/subscriptise';

function test() {
  let tests = [
    inTest('Electrolysis of Water', '2H2O → 2H2 + O2', '2H₂O → 2H₂ + O₂'),
    inTest('Photosynthesis', '6CO2 + 6H2O → C6H12O6 + 6O2', '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂')
  ];

  return tests;
}

function inTest(name, expected, given) {
  return {name, given, expected, result: unsubscriptise(given)};
}

let info = {
  run: test,
  name: 'Unsubscriptise - Equations'
};

export default info;