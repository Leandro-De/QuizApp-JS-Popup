const startBtn = document.querySelector('.StartBtn button');
const infoBox = document.querySelector('.InfoBox');
const continueBtn = infoBox.querySelector('.buttons .restart');
const quizBox = document.querySelector('.quizContainer');
const modal = document.querySelector('.modalContainer')

// Start
startBtn.onclick = () => {
    infoBox.classList.add("activeInfo");
}

//Continue btn
continueBtn.onclick = () => {
    infoBox.classList.remove("activeInfo");
    quizBox.classList.add("activeQuiz");
    showQuestions(0);
    queCounter(0);
}

let queCount = 0;
let queNumb = 1;
let userScore = 0;

const nextBtn = document.querySelector('.modalBtn button');

const resultBox = document.querySelector('.result-box');
const sendBtn = resultBox.querySelector('.buttons .submit');

// const data= document.querySelector('.data-container');
// const exitBtn = data.querySelector('.buttons .exit-btn');

// exitBtn.onclick = () => {
//     window.location.reload();
// }

nextBtn.onclick = () => {
    if(queCount < questions.length -1){
        queCount++;
        queNumb++;
        showQuestions(queCount);
        queCounter(queNumb);
        modal.classList.remove("activeModal");
        modal.classList.remove("activeModal2");
        modal.classList.remove("activeModal3");
    }else{
        console.log('Completed')
        showResult();
    }

}

//getting questions and options from array
function showQuestions(index){

    const queText = document.querySelector('.QuestionTitle');
    const queOptions = document.querySelector('.OptionsContainer');

    let queTag = `<span>${questions[index].question}</span>`;

    let optionTag = `<div class="options"><span>${questions[index].options[0]}</span></div>`+
                    `<div class="options"><span>${questions[index].options[1]}</span></div>`+
                    `<div class="options"><span>${questions[index].options[2]}</span></div>`+
                    `<div class="options"><span>${questions[index].options[3]}</span></div>`;

    queText.innerHTML=queTag;
    queOptions.innerHTML=optionTag;

    const option = queOptions.querySelectorAll('.options');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
        
    }
}

function optionSelected(answer){
    let userAns = answer.textContent;
    let correct = questions[queCount].abswer;
    if(userAns == correct){
        userScore +=1;
         modal.classList.add("activeModal");
    }else{
        modal.classList.add("activeModal2");
        console.log('mal');
    }
}

function queCounter(index){

    const counterFooter = quizBox.querySelector('.total-que');
    let totalQues = `<span><p>${index}</p>of<p>${questions.length}</p>Questions</span>`;
    
    counterFooter.innerHTML = totalQues;
}

function showResult(){
    infoBox.classList.remove("activeInfo");
    quizBox.classList.remove("activeQuiz");
    modal.classList.remove("activeModal");
    modal.classList.remove("activeModal2");
    modal.classList.remove("activeModal3");
    resultBox.classList.add("activeResult");

    const scoreText = resultBox.querySelector(".score-text");

    if(userScore > 3){
        let scoreTag = `<span>You got <p>${userScore}</p> out of <p>${questions.length}</p> </span>`;
        scoreText.innerHTML=scoreTag;
    }
    else if(userScore > 2){
        let scoreTag = `<span>You got <p>${userScore}</p> out of <p>${questions.length}</p> </span>`;
        scoreText.innerHTML=scoreTag;
    }

    else{
        let scoreTag = `<span>You got <p>${userScore}</p> out of <p>${questions.length}</p> </span>`;
        scoreText.innerHTML=scoreTag;
    }
}