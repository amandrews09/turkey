var interval;
var questionIndex = 0;
var questionDiv = document.getElementById("question");
const newButton1 = document.createElement("button");
const newButton2 = document.createElement("button");
const newButton3 = document.createElement("button");

function startQuiz() {
  // console.log("Hello");
  //setting interval for how fast timer counts down
  interval = setInterval(timer, 1000);
  // console.log("arrayGames", questions[questionIndex].questionText);
  // questionIndex = questionIndex+1
  showQuestion(questionIndex);
  startBtn.classList.add("hide");
}
//timer, counting down from 10
var count = 60;
function timer() {
  var timer = document.getElementById("time");
  timer.textContent = count;
  count = count - 1;
  if (count <= 0 || questionIndex > questions.length) {
    console.log("stop timer");
    clearInterval(interval);
    console.log("game over");
    gameOver();

  }
}
var gameBoard = document.getElementById("gameBoard")
function gameOver() {
var endGame = document.getElementById("endGame")
  gameBoard.classList.add("hide")
  endGame.classList.remove("hide")
}
//start button listening for click
var startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", startQuiz);

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
// console.log (questions.length)
// for (var i = 0; i < questions.length; i = i + 1) {
//   console.log (questions[i].answers[1])

// }
// newButton1.classList.add("hide")
// newButton2.classList.add("hide")
// newButton3.classList.add("hide")

function showQuestion(questionIndex) {
  
gameBoard.appendChild(newButton1);
gameBoard.appendChild(newButton2);
gameBoard.appendChild(newButton3);
  // console.log("show question");
  // console.log(questions[questionIndex]);
  questionDiv.innerHTML = questions[questionIndex].questionText;
  
  newButton1.textContent = questions[questionIndex].answers[0];
  newButton2.textContent = questions[questionIndex].answers[1];
  newButton3.textContent = questions[questionIndex].answers[2];
  // newButton1.classList.remove("hide")
  // newButton2.classList.remove("hide")
  // newButton3.classList.remove("hide")
//look for javascript which button is clicked multiple buttons on a page, you're trying to add one event listener for all buttons
  // newButton1.addEventListener("click", function () {
  //   console.log("new button");
  //   //else if statement to compare question index to questions.length
  //   questionIndex = questionIndex + 1;
  //   showQuestion(questionIndex);
  // });

  // Get all the buttons on the page
const buttons = document.querySelectorAll('button');
// console.log(buttons)
// Create a function to handle the button click event
function handleClick(event) {
  event.stopImmediatePropagation()
  // Handle the button click event here
  let variable = event.target.textContent;
  // console.log("eventTarget", variable)
// console.log (questions[questionIndex].correct)
console.log("answerIs", variable, questions[questionIndex].correct)
  if (variable === questions[questionIndex].correct){
    console.log("true")
    questionIndex = questionIndex + 1;
    if (questionIndex < questions.length) {
      showQuestion(questionIndex);
    }
    else {
      
    }
    
  } else {
    console.log("false")
    questionIndex = questionIndex + 1;
    count = count - 10;
    showQuestion(questionIndex);
  }
}

// Attach the event listener to each button
buttons.forEach(function(button) {
  button.addEventListener('click', handleClick);
});
}
