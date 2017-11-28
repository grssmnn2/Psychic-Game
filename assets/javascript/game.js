// introduce variables and array used in game 
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesList =[];
var userChoice= null;
// Generate random computer choice and store it in variable computerChoice
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length())];

// When the user presses a keyboard key, computer should run this function
document.onkeypress = function(event){
	// user choice is whatever key was pressed
	var userChoice = String.fromCharCode(event.key).toLowerCase();
	// adds user guess to list
	guessesList.push(userChoice);

	// if user chooses computer guess, increase wins by 1
	if (userChoice === computerChoice) {
		wins++;
	}

		// if user does not choose computer guess, decrease guesses left by 1
	else {
		guessesLeft--;
	
	}
		// if guesses reaches 0, increase losses by 1
	if (guessesLeft === 0){
		losses++;
	}
	
}

document.getElementById('wins').innerHTML= "Wins: " + wins + "<br>";
document.getElementById('losses').innerHTML= "Losses: " + losses + "<br>";
document.getElementById('guessesLeft').innerHTML= "Guesses Left: " + guessesLeft + "<br>";
document.getElementById('guessesList').innerHTML = "Guesses so Far: " + guessesList + "<br>";





