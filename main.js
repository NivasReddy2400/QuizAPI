const quizContainer = document.querySelector('.container');
const question = document.querySelector('.question');
const ans1 = document.querySelector('#ans1');
const ans2 = document.querySelector('#ans2');
const ans3 = document.querySelector('#ans3');
const ans4 = document.querySelector('#ans4');
const submitBtn = document.querySelector('#submit');

let quiz = [];
let currentQuestionIndex = 0;
let score = 0;

fetch('https://opentdb.com/api.php?amount=20&category=18&difficulty=hard&type=multiple')
.then(res=>{
    return res.json();
}).then((data) => {
    quiz = data.results;
    displayCurrentQuestion();
    // console.log(quiz)
}).catch((err) => {
    console.log(err);
})

function displayCurrentQuestion(){
    let currentQuestion = quiz[currentQuestionIndex];
    question.innerHTML = currentQuestion.question;
    let correctAnswer = currentQuestion.correct_answer;
    let incorrectAnswers = currentQuestion.incorrect_answers;
    let optionList = incorrectAnswers.slice(Math.floor(Math.random()*incorrectAnswers.length+1),0,correctAnswer)
    console.log(optionList);

}
