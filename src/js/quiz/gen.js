import * as QuizUI from '/js/quiz/ui';
import { compoundLookup, getCompoundByName, getCompoundsByFormula } from '/js/info/compounds';
import { titleCase, evalExp, simplifyFormula, processFormula } from '/js/utils/process';
import { subscriptise, unsubscriptise } from '/js/utils/subscriptise';

function getRandomInt(min, max) { // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getMassOfCompound(compound) {
  return processFormula(compound.formula)[1];
}

export function randomCompound() {
  return compoundLookup[getRandomInt(0, compoundLookup.length)];
}

export function performCompoundQuiz(compound) {
  let questions = ['formula', 'mass'];

  if (typeof compound === 'string') {
    let byName = getCompoundByName(compound);

    if (byName !== undefined) {
      compound = byName;
      todo = ['formula', 'mass'];
    } else {
      let byFormula = getCompoundsByFormula(compound);

      compound = byFormula !== undefined ? byFormula : undefined;
      todo = ['name', 'mass'];
    }
  }

  if (compound === undefined) {
    compound = randomCompound();
  }

  let mass = getMassOfCompound(compound);

  let i = 0;
  for (let q of questions.slice(0)) {
    switch (q) {
      case 'name':
        questions[i] = [`What is the name of the compound with the formula '${subscriptise(compound.formula)}'?`,
        [randomCompound().name, compound.name, randomCompound().name],
        compound.name]
        break;
      case 'formula':
        questions[i] = [`What is the formula of ${compound.name}?`,
          [subscriptise(randomCompound().formula), subscriptise(compound.formula), subscriptise(randomCompound().formula)],
          compound.formula];
        break;
      case 'mass':
        questions[i] = [`What is the relative formula mass of ${compound.name}?`,
          [getMassOfCompound(randomCompound()), mass, getMassOfCompound(randomCompound())],
          mass];
        break;
    }

    i++;
  }

  QuizUI.performQuiz(questions);
}