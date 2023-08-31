var interval;
var questionIndex = 0;
var questionDiv = document.getElementById("question");
const newButton1 = document.createElement("button");
const newButton2 = document.createElement("button");
const newButton3 = document.createElement("button");

function startQuiz() {
  console.log("Hello");
  //setting interval for how fast timer counts down
  interval = setInterval(timer, 1000);
  console.log("arrayGames", questions[questionIndex].questionText);
  // questionIndex = questionIndex+1
  showQuestion(questionIndex);
  startBtn.classList.add("hide");
}
//timer, counting down from 10
var count = 9;
function timer() {
  var timer = document.getElementById("time");
  timer.textContent = count;
  count = count - 1;
  if (count < 0) {
    console.log("stop timer");
    clearInterval(interval);
  }
}
//start button listening for click
var startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", startQuiz);

const questions = [
  {
    questionText: "question 1",
    answers: ["Q1 answer 1", "Q1 answer 2", "Q1 answer 3"],
    correct: "answer 3",
  },
  {
    questionText: "question 2",
    answers: ["Q2 answer 1", "Q2 answer 2", "Q2 answer 3"],
    correct: "answer 2",
  },
  {
    questionText: "question 3",
    answers: ["Q3 answer 1", "Q3 answer 2", "Q3 answer 3"],
    correct: "answer 1",
  },
  {
    questionText: "question 4",
    answers: ["Q2 answer 1", "Q2 answer 2", "Q2 answer 3"],
    correct: "answer 2",
  },
  {
    questionText: "question 5",
    answers: ["Q3 answer 1", "Q3 answer 2", "Q3 answer 3"],
    correct: "answer 1",
  },
  {
    questionText: "question 6",
    answers: ["Q3 answer 1", "Q3 answer 2", "Q3 answer 3"],
    correct: "answer 1",
  },
];
// console.log (questions.length)
// for (var i = 0; i < questions.length; i = i + 1) {
//   console.log (questions[i].answers[1])

// }
document.body.appendChild(newButton1);
document.body.appendChild(newButton2);
document.body.appendChild(newButton3);
newButton1.classList.add("hide")
newButton2.classList.add("hide")
newButton3.classList.add("hide")

function showQuestion(questionIndex) {
  console.log("show question");
  console.log(questions[questionIndex]);
  questionDiv.innerHTML = questions[questionIndex].questionText;
  
  newButton1.textContent = questions[questionIndex].answers[0];
  newButton2.textContent = questions[questionIndex].answers[1];
  newButton3.textContent = questions[questionIndex].answers[2];
  newButton1.classList.remove("hide")
  newButton2.classList.remove("hide")
  newButton3.classList.remove("hide")
//look for javascript which button is clicked multiple buttons on a page, you're trying to add one event listener for all buttons
  newButton1.addEventListener("click", function () {
    // document.body.removeChild(newButton1)
    console.log("new button");

    //else if statement to compare question index to questions.length
    questionIndex = questionIndex + 1;
    showQuestion(questionIndex);
  });
}
