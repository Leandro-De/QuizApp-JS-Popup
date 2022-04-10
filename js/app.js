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

const nextBtn = document.querySelector('.modalBtn button');

nextBtn.onclick = () => {
    if(queCount < questions.length -1){
        queCount++;
        queNumb++;
        showQuestions(queCount);
        queCounter(queNumb);
        modal.classList.remove("activeModal");
    }else{
        console.log('Completed')
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
         modal.classList.add("activeModal");
    }else{
        console.log('mal');
    }


}

function queCounter(index){

    const counterFooter = quizBox.querySelector('.total-que');
    let totalQues = `<span><p>${index}</p>of<p>${questions.length}</p>Questions</span>`;
    
    counterFooter.innerHTML = totalQues;
}