let countHomeGoal = 0;
let countHomeBehind = 0;
let countHomeTotal = 0;
let countAwayGoal = 0;
let countAwayBehind = 0;
let countAwayTotal = 0;

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
  if (countHomeTotal > countAwayTotal) {
    console.log("Home team is winning");
  } else {
    console.log("Away team is winning");
  }
}
