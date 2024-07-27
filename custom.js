// Todolist
const todoList = [];
function addTodo() {
  let value = document.getElementById("todo-input").value;
  todoList.push(value);
  displayTodo();
}
function displayTodo() {
  let x = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoItem = todoList[i];
    const todoItemHtml = `<p>${todoItem}</p>`;
    console.log(todoItemHtml);
    x += todoItemHtml;
    document.querySelector(".todo-content").innerHTML = x;
    console.log(x);
  }
}

// Scoreboard
let countHomeGoal = 0;
let countHomeBehind = 0;
let countHomeTotal = 0;
let countAwayGoal = 0;
let countAwayBehind = 0;
let countAwayTotal = 0;
let homeTeamName = "Collingwood";
let awayTeamName = "Richmond";

function homeGoal() {
  countHomeGoal += 1;
  homeTotal();
}
function homeBehind() {
  countHomeBehind += 1;
  homeTotal();
}
function homeTotal() {
  countHomeTotal = countHomeGoal * 6 + countHomeBehind * 1;
  document.getElementById("homeTotalScore").textContent = countHomeTotal;
  document.getElementById("hGoal").textContent = countHomeGoal;
  document.getElementById("hBehind").textContent = countHomeBehind;
  displayWinner();
}

function awayGoal() {
  countAwayGoal += 1;
  awayTotal();
}

function awayBehind() {
  countAwayBehind += 1;
  awayTotal();
}
function awayTotal() {
  countAwayTotal = countAwayGoal * 6 + countAwayBehind * 1;
  document.getElementById("awayTotalScore").textContent = countAwayTotal;
  document.getElementById("aGoal").textContent = countAwayGoal;
  document.getElementById("aBehind").textContent = countAwayBehind;
  displayWinner();
}
function displayWinner() {
  let diff = Math.abs(countHomeTotal - countAwayTotal);
  if (countHomeTotal > countAwayTotal) {
    document.getElementById(
      "result-text"
    ).textContent = `${homeTeamName} is winning by ${diff} pts.`;
  } else if (countHomeTotal < countAwayTotal) {
    document.getElementById(
      "result-text"
    ).textContent = `${awayTeamName} is winning by ${diff} pts.`;
  } else {
    document.getElementById("result-text").textContent = `The score is level.`;
  }
}
