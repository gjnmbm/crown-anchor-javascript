'use strict';
let funds = 50;
let bets = {};
let hand = [];

function onRoll() {
	console.log("Button pressed!");
	console.log("What fun!");
}

function placeBet(suit) {
	let bet = prompt("How much will you bet here?", 0);
	document.getElementById(`${suit}`).textContent =`Bet placed: ${bet} pence`;
}
