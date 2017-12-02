// introduce variables and array used in game 
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesList =[];


// visible text sent to html page and placed in div with id game
var html = 
		"<p> Wins: " + wins + "</p>" +
		"<p> Losses: " + losses + "</p>" +
		"<p> Guesses Left: " + guessesLeft + "</p>" +
		"<p> Guesses so Far: " + guessesList + "</p>";

		document.querySelector("#game").innerHTML = html;

// declare reset function to call after winning or losing game, resets game start
var reset = function () {
	guessesLeft = 10;
	guessesList = [];
	var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
}

// When the user presses a keyboard key, computer should run this function
document.onkeyup = function(event) {
	// user choice is whatever key was pressed
	var userChoice = event.key;

	// check if user input is alphabetical and if so run the game, if not do not add input to guesses list
	if (event.keyCode >= 65 && event.keyCode <= 90) {
		
	
	// Generate random computer choice and store it in variable computerChoice
	var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

			// if user chooses computer guess, increase wins by 1
			if (userChoice === computerChoice){
				
				wins++; 
				alert("You win!!");
				// prompt computer to choose a new random number and reset code
				reset();
			
			}

			// if incorrect guess, decrease guesses by 1 and add guess to list
			else {
				guessesLeft--;
				guessesList.push(userChoice);
				
				}

			//if no more guesses, increase losses by 1 
			if (guessesLeft ===0){
				
				losses++;
				alert("Everyone loses sometimes. Try again?");
				// prompt computer to choose a new random number and reset code
				reset();
					
			}


		// text to be displayed on user side of screen
		var html = 
		"<p> Wins: " + wins + "</p>" +
		"<p> Losses: " + losses + "</p>" +
		"<p> Guesses Left: " + guessesLeft + "</p>" +
		"<p> Guesses so Far: " + guessesList + "</p>";
		// document calls div id game, sends text above to document
		document.querySelector("#game").innerHTML = html;
		
		// end of if/else showing popped wrong user input
	}  else {
		guessesList.pop(userChoice);
	
	}

	
};




	







