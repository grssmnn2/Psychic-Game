// introduce variables and array used in game 
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesList =[];
var userChoice= null;
// Generate random computer choice and store it in variable computerChoice
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

// When the user presses a keyboard key, computer should run this function
document.onkeypress = function(event){
	// user choice is whatever key was pressed
	var userChoice = String.fromCharCode(event.keyCode).toLowerCase();
	// adds user guess to list
	guessesList.push(userChoice);

	// if user chooses computer guess, increase wins by 1
	if (userChoice === computerChoice){
		wins++;
		guessesList.push(userChoice);
		// prompt computer to choose a new random number
		var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
	}
	// if no more guesses and still not choosing computer choice, increase Losses by 1, reset guesses left and empty guesses list
	else if (guessesLeft === 0 && userChoice !== computerChoice){
		losses++;
		var guessesLeft = 10;
		var guessesList = [];
		// prompt computer to choose a new random number
		var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

	
	}
		// if user choice does not equal computer choice, decrease guesses by 1 and add guess to list
	else (userChoice !== computerChoice){
		guesses--;
		guessesList.push(userChoice);
	}
	
}

document.getElementById('wins').innerHTML= "Wins: " + wins + "<br>";
document.getElementById('losses').innerHTML= "Losses: " + losses + "<br>";
document.getElementById('guessesLeft').innerHTML= "Guesses Left: " + guessesLeft + "<br>";
document.getElementById('guessesList').innerHTML = "Guesses so Far: " + guessesList + "<br>";





