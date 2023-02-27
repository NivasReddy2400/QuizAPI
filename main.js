const qapi = fetch('https://opentdb.com/api.php?amount=4&category=18&difficulty=hard&type=multiple')
.then(res => res.json())
.then(data => {
    displayQuestion(data.results[0]);
})

function displayQuestion(data){
    let crctans = data.correct_answer;
    let incrctans = data.incorrect_answers;
    let optionList = incrctans;
    optionList.splice(Math.floor(Math.random()*(incrctans.len+1)),0,crctans);
    console.log(optionList)
}

function checkans(){
    if(crctans === )
}
 



// const next = document.querySelector('.next');
// const previous = document.querySelector('.previous');
// const question = document.querySelector('.question');
// const ans1 = document.querySelector('#ans1');
// const ans2 = document.querySelector('#ans2');
// const ans3 = document.querySelector('#ans3');
// const ans4 = document.querySelector('#ans4');
