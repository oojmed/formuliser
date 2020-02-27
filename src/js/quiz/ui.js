let answerText = undefined;
let nextQuestions = undefined;

function showQuiz() {
  document.body.setAttribute('quiz', true);
}

function hideQuiz() {
  document.body.removeAttribute('quiz');
}

function setTitle(title) {
  document.getElementById('quiz-title').innerText = title;
}

function onOptionClick(el) {
  if (el.innerText === answerText) {
    quizCorrect();
  } else {
    quizIncorrect();
  }

  afterQuiz();
}

function bodyColorFlash(color) {
  document.body.style.backgroundColor = color;

  setTimeout(function() {
    document.body.style.backgroundColor = '#181a1b';
  }, 500);
}

function quizCorrect() {
  bodyColorFlash('#2E7D32');
}

function quizIncorrect() {
  bodyColorFlash('#C62828');
}

function afterQuiz() {
  answerText = undefined;
}

async function setupOptions(options) {
  document.getElementById('quiz-options').innerHTML = '';

  return new Promise(resolve => {
    options.forEach((x) => {
      let el = document.createElement('button');
      el.className = 'quiz-option';
      el.innerText = x;
      el.onclick = function() { onOptionClick(this); resolve(); };

      document.getElementById('quiz-options').appendChild(el);
    });
  });
}

export async function performQuestion(title, options, answer) {
  answerText = answer;

  setTitle(title);

  await setupOptions(options);
}

export async function performQuiz(questions) {
  showQuiz();

  for (let x of questions) {
    let title = x[0];
    let options = x[1];
    let answer = x[2];

    await performQuestion(title, options, answer);
  }

  hideQuiz();
}