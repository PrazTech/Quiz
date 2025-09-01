const Questions = [{
    q: 'What is the most widely spoken language in the world?',
    a: [
        {text:'Spanish', iscorrect: false},
        {text:'Mandarin', iscorrect: false},
        {text:'English', iscorrect: true},
        {text:'Korean', iscorrect: false}
    ]
},
{
    q: 'Who is the most popular K-POP stars making history?',
    a: [
        {text:'BTS', iscorrect: true},
        {text:'TXT', iscorrect: false},
        {text:'Stray Kids', iscorrect: false},
        {text:'Seventeen', iscorrect: false}
    ]
},
{
    q: 'When is MAMA held every year?',
    a:[
        {text:'November 22nd', iscorrect: false},
        {text:'December 25th', iscorrect: true},
        {text:'October 23rd', iscorrect: false},
        {text:'October 22nd', iscorrect: false}
    ]
},
{
    q: 'When is the capital of Nigeria?',
    a:[
        {text:'Bangkok', iscorrect: false},
        {text:'Abuja', iscorrect: true},
        {text:'England', iscorrect: false},
        {text:'Shanghai', iscorrect: false}
    ]
}
]

let currQuestion = 0
let score = 0

function loadQues() {
    const question = document.getElementById("quest")
    const opt = document.getElementById("opt")
 
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "checkbox";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
 
loadQues();
 function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}
 
 
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("quest").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currQuestion].a[selectedAns].iscorrect) {
        score++;
        nextQuestion();
    } else {
        nextQuestion();
    }
} 