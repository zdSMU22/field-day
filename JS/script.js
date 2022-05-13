// import ScoreboardView from "./scoreboard";

// let playerOneScore = 0;
// let playerTwoScore = 0;
// let playerThreeScore = 0;
// let playerFourScore = 0;

// const root = document.querySelector("#app");
// const view = new ScoreboardView(root, "Player One", "Player Two", (player, direction) => {
// 	const difference = direction === "minus" ? -1 : 1;

// 	if (player === "one") {
// 		playerOneScore = Math.max(playerOneScore + difference, 0);
// 	} else {
// 		playerTwoScore = Math.max(playerTwoScore + difference, 0);
// 	}

// 	view.update(playerOneScore, playerTwoScore);
// });

let counterVal1 = document.getElementById("score-freshman");
let counterVal2 = document.getElementById("score-sophomore");
let counterVal3 = document.getElementById("score-juniors");
let counterVal4 = document.getElementById("score-seniors");

function valInc1 () {
  counterVal1.value = parseInt(counterVal1.value) + 1;}
function valDec1 () {
  counterVal1.value = parseInt(counterVal1.value) - 1;
}

function valInc2 () {
    counterVal2.value = parseInt(counterVal2.value) + 1;}
  function valDec2 () {
    counterVal2.value = parseInt(counterVal2.value) - 1;
  }

  function valInc3 () {
    counterVal3.value = parseInt(counterVal3.value) + 1;}
  function valDec3 () {
    counterVal3.value = parseInt(counterVal3.value) - 1;
  }

  function valInc4 () {
    counterVal4.value = parseInt(counterVal4.value) + 1;}
  function valDec4 () {
    counterVal4.value = parseInt(counterVal4.value) - 1;
  }