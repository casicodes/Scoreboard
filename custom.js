// Scoreboard
let countHomeGoal = 0;
let countHomeBehind = 0;
let countHomeTotal = 0;
let countAwayGoal = 0;
let countAwayBehind = 0;
let countAwayTotal = 0;
let homeTeamName = "Collingwood";
let awayTeamName = "Richmond";
let scoreHistory = [];

function homeGoal() {
  countHomeGoal += 1;
  scoreHistory.push("homeGoal");
  homeTotal();
}
function homeBehind() {
  countHomeBehind += 1;
  scoreHistory.push("homeBehind");
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
  scoreHistory.push("awayGoal");
  awayTotal();
}

function awayBehind() {
  countAwayBehind += 1;
  scoreHistory.push("awayBehind");
  awayTotal();
}
function awayTotal() {
  countAwayTotal = countAwayGoal * 6 + countAwayBehind * 1;
  document.getElementById("awayTotalScore").textContent = countAwayTotal;
  document.getElementById("aGoal").textContent = countAwayGoal;
  document.getElementById("aBehind").textContent = countAwayBehind;
  displayWinner();
  console.log(scoreHistory);
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
function undo() {
  if (scoreHistory.length === 0) {
    alert("There's nothing to undo!");
    return;
  }

  const lastAction = scoreHistory.pop();

  switch (lastAction) {
    case "homeGoal":
      countHomeGoal -= 1;
      break;
    case "homeBehind":
      countHomeBehind -= 1;
      break;
    case "awayGoal":
      countAwayGoal -= 1;
      break;
    case "awayBehind":
      countAwayBehind -= 1;
      break;
  }

  homeTotal();
  awayTotal();
}
function reset() {
  countHomeGoal = 0;
  countHomeBehind = 0;
  countHomeTotal = 0;
  countAwayGoal = 0;
  countAwayBehind = 0;
  countAwayTotal = 0;
  document.getElementById("awayTotalScore").textContent = 0;
  document.getElementById("homeTotalScore").textContent = 0;
  document.getElementById("aGoal").textContent = 0;
  document.getElementById("hGoal").textContent = 0;
  document.getElementById("aBehind").textContent = 0;
  document.getElementById("hBehind").textContent = 0;
  document.getElementById(
    "result-text"
  ).textContent = `You'll see live result here...`;
  scoreHistory = [];
}
