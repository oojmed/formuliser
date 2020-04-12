import { subscriptise } from '/js/utils/subscriptise';

function test() {
  let tests = [
    inTest('Addition 1', 'Na2+2', 'Na₂₊₂'),
    inTest('Addition 2', 'O40+20', 'O₄₀₊₂₀'),
    inTest('Addition 3', 'N999+999', 'N₉₉₉₊₉₉₉'),

    inTest('Subtraction 1', 'He2-1', 'He₂₋₁'),
    inTest('Subtraction 2', 'I30-10', 'I₃₀₋₁₀'),
    inTest('Subtraction 3', 'U999-998', 'U₉₉₉₋₉₉₈'),

    inTest('Multiplication', 'C2*4', 'C₂⁎₄'),

    inTest('Division', 'H4/2', 'H₄⸝₂')
  ];

  return tests;
}

function inTest(name, given, expected) {
  return {name, given, expected, result: subscriptise(given)};
}

let info = {
  run: test,
  name: 'Subscriptise - Maths'
};

export default info;