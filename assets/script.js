var interval

function startQuiz(){
    console.log("Hello") 
    //setting interval for how fast timer counts down
interval = setInterval(timer, 1000);

}
//timer, counting down from 10
var count = 9
function timer() {
  var timer= document.getElementById("time")
  timer.textContent = count;
  count = count-1;
  if(count < 0) {
    console.log("stop timer")
    clearInterval(interval)

  }
}
//start button listening for click
var startBtn = document.getElementById("startBtn")

startBtn.addEventListener("click",startQuiz)