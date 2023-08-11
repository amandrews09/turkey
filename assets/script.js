function startQuiz(){
    console.log("Hello") 
    //setting interval for how fast timer counts down
setInterval(timer, 1000)

}
//timer, counting down from 60
var count = 59
function timer() {
  var timer= document.getElementById("time")
  timer.textContent = count;
  count = count-1;
}
//start button listening for click
var startBtn = document.getElementById("startBtn")

startBtn.addEventListener("click",startQuiz)