const quizContainer = document.querySelector('.container');
const question = document.querySelector('.question');
const next = document.querySelector('#next');
const previous = document.querySelector('#previous');
const ans1 = document.querySelector('#ans1');
const ans2 = document.querySelector('#ans2');
const ans3 = document.querySelector('#ans3');
const ans4 = document.querySelector('#ans4');
const submitBtn = document.querySelector('#submit');

let quiz = [];
let currentQuestionIndex = 0;
let score = 0;

fetch('https://opentdb.com/api.php?amount=20&category=18&difficulty=hard&type=multiple')
  .then(response => response.json())
  .then(data => {
    quiz = data.results;
    displayCurrentQuestion();
  })
  .catch(error => console.error(error));

function displayCurrentQuestion() {
  const currentQuestion = quiz[currentQuestionIndex];
  question.textContent = currentQuestion.question;
  let crctans = currentQuestion.correct_answer;
  let incrctans = currentQuestion.incorrect_answers;
  let optionList = incrctans;
  optionList.splice(Math.floor(Math.random() * (incrctans.length + 1)), 0, crctans);
  ans1.textContent = optionList[0];
  ans2.textContent = optionList[1];
  ans3.textContent = optionList[2];
  ans4.textContent = optionList[3];
}

function checkAnswer(selectedAnswer) {
  const currentQuestion = quiz[currentQuestionIndex];
  const correctAnswer = currentQuestion.correct_answer;
  if (selectedAnswer === correctAnswer) {
    score++;
  }
}

function handleNextClick() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= quiz.length) {
      currentQuestionIndex = 0;
    }
    displayCurrentQuestion();
  }
  
  function handlePreviousClick() {
    currentQuestionIndex--;
    if (currentQuestionIndex <= 0) {
      currentQuestionIndex = quiz.length - 1;
    }
    displayCurrentQuestion();
  }

ans1.addEventListener('click', function() {
  checkAnswer(ans1.textContent);
  currentQuestionIndex++;
  displayCurrentQuestion();
});

ans2.addEventListener('click', function() {
  checkAnswer(ans2.textContent);
  currentQuestionIndex++;
  displayCurrentQuestion();
});

ans3.addEventListener('click', function() {
  checkAnswer(ans3.textContent);
  currentQuestionIndex++;
  displayCurrentQuestion();
});

ans4.addEventListener('click', function() {
  checkAnswer(ans4.textContent);
  currentQuestionIndex++;
  displayCurrentQuestion();
});

next.addEventListener('click', handleNextClick);
previous.addEventListener('click', handlePreviousClick);

submitBtn.addEventListener('click', function() {
  const result = document.createElement('p');
  result.textContent = `You scored ${score} out of ${quiz.length}`;
  quizContainer.appendChild(result);
  setTimeout(()=>{
    result.textContent = ""
  },3000)
});


