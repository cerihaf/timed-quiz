const startButton = document.getElementById('start-btn')
const beginGame = document.getElementById('start-game')
const game = document.getElementById('game')
const answers = document.getElementById('answers')
const question = document.getElementById('question')
const correct = document.getElementById('correct')

let time = 75
let currentQuestion = 0



// when you click the start button, this is the first move 
function startGame() {
    beginGame.classList.toggle('hide');
    game.classList.toggle('hide');
    showQuestion()
}

function nextQuestion(e) {
    e.preventDefault()
    let answer=e.currentTarget.dataset.correct
    if(answer == "false"){
        time-=10
        correct.innerHTML="Wrong!" 
    }
    else{
        correct.innerHTML="Correct!"
    }
    currentQuestion++
    showQuestion()
}


function countdown() {

}

function showQuestion() {
    let Q = questions[currentQuestion]
    console.log(question)
    question.innerHTML=Q.question
    for(let i = 0; i < Q.answers.length; i++) {
        let li=document.createElement("li")
        let btn=document.createElement("button")
        btn.innerHTML=Q.answers[i].text
        btn.classList.add('btn', 'quiz-answer')
        btn.setAttribute('data-correct', Q.answers[i].correct)
        li.appendChild(btn)
        answers.appendChild(li)
    }
    let quizAnswers=document.querySelectorAll(".quiz-answer")
    console.log(quizAnswers)
    quizAnswers.forEach(answer=>{
        answer.addEventListener('click', nextQuestion)
    })

}

const questions = [
{
    question: 'How do you call a function named "myFunction"?',
    answers: [
    { text: 'call myFunction()', correct: false },
    { text: 'myFunction()', correct: true },
    { text: 'call function myFunction()', correct: false }
    ]
},
{
    question: 'How do you write "Hello World" in an alert box?',
    answers: [
    { text: 'msg("Hello World");  ', correct: false },
    { text: 'msgBox("Hello World");', correct: false },
    { text: 'alert("Hello World");', correct: true },
    { text: 'alertBox("Hello World");', correct: false }
    ]
},
{
    question: 'How does a WHILE loop start?',
    answers: [
    { text: 'while i = 1 to 10', correct: false },
    { text: 'while (i <= 10; i++)', correct: false },
    { text: 'while (i <= 10)', correct: true }
    ]
},
{
    question: 'What is the correct way to write a JavaScript array?',
    answers: [
    { text: 'var colors = (1:"red", 2:"green", 3:"blue")', correct: false },
    { text: 'var colors = 1 = ("red"), 2 = ("green"), 3= ("blue")', correct: false },
    { text: 'var colors = ["red", "green", "blue"]', correct: true },
    { text: 'var colors = "red", "green", "blue"', correct: false }
    ]
},
{
    question: 'How do you comment in javascript?',
    answers: [
    { text: '<comment> This is a comment </comment>', correct: false },
    { text: '// This is a comment', correct: true },
    { text: '/ This is a comment', correct: false },
    { text: '||This is a comment||', correct: false }
    ]
}
]

  

// Button that starts the timer and quiz
startButton.addEventListener("click", startGame)