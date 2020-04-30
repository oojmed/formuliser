import { balanceEquation } from '/js/utils/balance';

function test() {
  let tests = [
    inTest('Electrolysis of Water', 'H₂O → H₂ + O₂', '2H₂O → 2H₂ + O₂'),
    inTest('Photosynthesis', 'CO₂ + H₂O → C₆H₁₂O₆ + O₂', '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂')
  ];

  return tests;
}

function inTest(name, given, expected) {
  return {name, given, expected, result: balanceEquation(given)};
}

let info = {
  run: test,
  name: 'Balancing Equations'
};

export default info;