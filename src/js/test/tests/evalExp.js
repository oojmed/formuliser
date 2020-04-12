import { evalExp } from '/js/utils/process';

function ranDigits(digits) {
  return Math.round(Math.random() * Math.pow(10, digits));
}

function ranRangeInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ranRangeFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function test() {
  let randomSingles = [ranDigits(1), ranDigits(1), ranDigits(1), ranDigits(1), ranDigits(1), ranDigits(1), ranDigits(1), ranDigits(1)];
  let randomInts = [ranRangeInt(0, 100), ranRangeInt(0, 100), ranRangeInt(0, 100), ranRangeInt(0, 100), ranRangeInt(0, 100), ranRangeInt(0, 100), ranRangeInt(0, 100), ranRangeInt(0, 100)];
  let randomFloats = [ranRangeFloat(0, 100), ranRangeFloat(0, 100), ranRangeFloat(0, 100), ranRangeFloat(0, 100), ranRangeFloat(0, 100), ranRangeFloat(0, 100), ranRangeFloat(0, 100), ranRangeFloat(0, 100)];
  let randomFloats2 = [ranRangeFloat(0, 100), ranRangeFloat(0, 100), ranRangeFloat(0, 100), ranRangeFloat(0, 100), ranRangeFloat(0, 100), ranRangeFloat(0, 100), ranRangeFloat(0, 100), ranRangeFloat(0, 100), ranRangeFloat(0, 100), ranRangeFloat(0, 100), ranRangeFloat(0, 100), ranRangeFloat(0, 100)];

  let tests = [
    inTest('Random Single Digit Add', `${randomSingles[0]} + ${randomSingles[1]}`, randomSingles[0] + randomSingles[1]),
    inTest('Random Single Digit Sub', `${randomSingles[2]} - ${randomSingles[3]}`, randomSingles[2] - randomSingles[3]),
    inTest('Random Single Digit Mul', `${randomSingles[4]} * ${randomSingles[5]}`, randomSingles[4] * randomSingles[5]),
    inTest('Random Single Digit Div', `${randomSingles[6]} / ${randomSingles[7]}`, randomSingles[6] / randomSingles[7]),

    inTest('Random Int Add', `${randomInts[0]} + ${randomInts[1]}`, randomInts[0] + randomInts[1]),
    inTest('Random Int Sub', `${randomInts[2]} - ${randomInts[3]}`, randomInts[2] - randomInts[3]),
    inTest('Random Int Mul', `${randomInts[4]} * ${randomInts[5]}`, randomInts[4] * randomInts[5]),
    inTest('Random Int Div', `${randomInts[6]} / ${randomInts[7]}`, randomInts[6] / randomInts[7]),

    inTest('Random Float Add', `${randomFloats[0]} + ${randomFloats[1]}`, randomFloats[0] + randomFloats[1]),
    inTest('Random Float Sub', `${randomFloats[2]} - ${randomFloats[3]}`, randomFloats[2] - randomFloats[3]),
    inTest('Random Float Mul', `${randomFloats[4]} * ${randomFloats[5]}`, randomFloats[4] * randomFloats[5]),
    inTest('Random Float Div', `${randomFloats[6]} / ${randomFloats[7]}`, randomFloats[6] / randomFloats[7]),

    inTest('Random Float Add, Sub', `${randomFloats2[0]} + ${randomFloats2[1]} - ${randomFloats2[2]}`, randomFloats2[0] + randomFloats2[1] - randomFloats2[2]),
    inTest('Random Float Sub, Add', `${randomFloats2[3]} - ${randomFloats2[4]} + ${randomFloats2[5]}`, randomFloats2[3] - randomFloats2[4] + randomFloats2[5]),
    inTest('Random Float Mul, Div', `${randomFloats2[6]} * ${randomFloats2[7]} / ${randomFloats2[8]}`, randomFloats2[6] * randomFloats2[7] / randomFloats2[8]),
    inTest('Random Float Div, Mul', `${randomFloats2[9]} / ${randomFloats2[10]} * ${randomFloats2[11]}`, randomFloats2[9] / randomFloats2[10] * randomFloats2[11])
  ];

  return tests;
}

function inTest(name, given, expected) {
  return {name, given, expected: expected.toFixed(5), result: evalExp(given).toFixed(5)};
}

let info = {
  run: test,
  name: 'Evaluate Expression'
};

export default info;