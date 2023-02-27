const quizContainer = document.querySelector('.container');
const question = document.querySelector('.question');
const ans1 = document.querySelector('#ans1');
const ans2 = document.querySelector('#ans2');
const ans3 = document.querySelector('#ans3');
const ans4 = document.querySelector('#ans4');
const submitBtn = document.querySelector('#submit');
const next = document.querySelector('#next');
const previous = document.querySelector('#previous');

let quiz = [];
let currentQuestionIndex = 0;
let score = 0;
const csapi = 'https://opentdb.com/api.php?amount=34&category=18&difficulty=hard&type=multiple'
fetch(csapi)
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
    let optionList = incorrectAnswers;
    optionList.splice(Math.floor(Math.random()*(incorrectAnswers.length+1)),0,correctAnswer)
    //console.log(correctAnswer);
    ans1.textContent = optionList[0]; 
    ans2.textContent = optionList[1];
    ans3.textContent = optionList[2];
    ans4.textContent = optionList[3];
    }

function checkAnswer(submittedAnswer){
    if(quiz[currentQuestionIndex].correct_answer === submittedAnswer){
        score++
    }
}

function handleNextClick(){
    currentQuestionIndex++;
    if(currentQuestionIndex >= quiz.length){
        currentQuestionIndex=0;
    }
    displayCurrentQuestion();
}

function handlePreviousClick(){
    currentQuestionIndex--;
    if(currentQuestionIndex < 0){
        currentQuestionIndex=quiz.length -1
    }
    displayCurrentQuestion();
}

ans1.addEventListener('click',() =>{ 
    checkAnswer(ans1.innerHTML);
    currentQuestionIndex++;
    displayCurrentQuestion();
})

ans2.addEventListener('click',() =>{ 
    checkAnswer(ans2.innerHTML);
    currentQuestionIndex++;
    displayCurrentQuestion();
})

ans3.addEventListener('click',() =>{ 
    checkAnswer(ans3.innerHTML);
    currentQuestionIndex++;
    displayCurrentQuestion();
})

ans4.addEventListener('click',() =>{ 
    checkAnswer(ans4.innerHTML);
    currentQuestionIndex++;
    displayCurrentQuestion();
})

next.addEventListener('click',handleNextClick);
previous.addEventListener('click',handlePreviousClick);



submitBtn.addEventListener('click', function() {
    const result = document.createElement('p');
    result.textContent = `You scored ${score} out of ${quiz.length}`;
    quizContainer.appendChild(result);
    setTimeout(()=>{
      result.textContent = ""
    },5000)
  });
