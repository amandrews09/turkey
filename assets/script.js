var interval;
var questionIndex = 0;
var questionDiv = document.getElementById("question");
const newButton1 = document.createElement("button");
const newButton2 = document.createElement("button");
const newButton3 = document.createElement("button");

var score = 0; // Variable to track the score
var playerInitials; // Variable to store player initials

// Declare playerInitialsInput and submitButton outside of the gameOver function
var playerInitialsInput = document.createElement("input");
playerInitialsInput.type = "text";
playerInitialsInput.placeholder = "Enter your initials";

var submitButton = document.createElement("button");
submitButton.textContent = "Submit";
submitButton.addEventListener("click", function() {
    playerInitials = playerInitialsInput.value;
    console.log("Player Initials:", playerInitials);
    // You can save the player's initials and score to a database or perform any other desired action
});

document.getElementById("endGame").appendChild(playerInitialsInput);
document.getElementById("endGame").appendChild(submitButton);

const questions = [
    {
        questionText: "Which of these is NOT a programming language?",
        answers: ["Java", "Python", "Banana"],
        correct: "Banana",
    },
    {
        questionText: "What is computer coding",
        answers: ["a TV show", "tells a computer what to do", "a radio show"],
        correct: "tells a computer what to do",
    },
    {
        questionText: "What are people who write computer code called?",
        answers: ["Programmers", "Manufacturers", "Cryptographers"],
        correct: "Programmers",
    },
    {
        questionText: "What does HTML stand for?",
        answers: ["nothing", "Hyper Text Markup Language", "Happy Tappy Mappy Lappy"],
        correct: "Hyper Text Markup Language",
    },
    {
        questionText: "What does CSS stand for?",
        answers: ["Cascading Style Sheets", "Crappy Stuff Sorter", "Crying So Sadly"],
        correct: "Cascading Style Sheets",
    },
];

function startQuiz() {
    interval = setInterval(timer, 1000);
    showQuestion(questionIndex);
    startBtn.classList.add("hide");
}

var count = 60;

function timer() {
    var timer = document.getElementById("time");
    timer.textContent = count;
    count = count - 1;
    if (count <= 0 || questionIndex >= questions.length) {
        clearInterval(interval);
        gameOver();
    }
}

var gameBoard = document.getElementById("gameBoard");

function gameOver() {
    var endGame = document.getElementById("endGame");
    gameBoard.classList.add("hide");
    endGame.classList.remove("hide");

    // Display the final score
    var scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = "Your Score: " + score;
}

var startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", startQuiz);

function showQuestion(questionIndex) {
    gameBoard.appendChild(newButton1);
    gameBoard.appendChild(newButton2);
    gameBoard.appendChild(newButton3);

    questionDiv.innerHTML = questions[questionIndex].questionText;
    newButton1.textContent = questions[questionIndex].answers[0];
    newButton2.textContent = questions[questionIndex].answers[1];
    newButton3.textContent = questions[questionIndex].answers[2];

    // Clear previous event listeners
    newButton1.removeEventListener('click', handleClick);
    newButton2.removeEventListener('click', handleClick);
    newButton3.removeEventListener('click', handleClick);

    // Attach event listeners to each button
    newButton1.addEventListener('click', handleClick);
    newButton2.addEventListener('click', handleClick);
    newButton3.addEventListener('click', handleClick);
}

function handleClick(event) {
    event.stopImmediatePropagation();
    let variable = event.target.textContent;

    console.log("answerIs", variable, questions[questionIndex].correct);

    if (variable === questions[questionIndex].correct) {
        console.log("true");
        score++; // Increment the score for correct answers
    } else {
        console.log("false");
        count = Math.max(0, count - 10);
    }

    questionIndex = questionIndex + 1;

    if (questionIndex < questions.length) {
        showQuestion(questionIndex);
    } else {
        gameOver();
    }
}
