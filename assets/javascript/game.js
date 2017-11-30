// introduce variables and array used in game 
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesList =[];

var html = 
		"<p> Wins: " + wins + "</p>" +
		"<p> Losses: " + losses + "</p>" +
		"<p> Guesses Left: " + guessesLeft + "</p>" +
		"<p> Guesses so Far: " + guessesList + "</p>";

		document.querySelector("#game").innerHTML = html;


// When the user presses a keyboard key, computer should run this function
document.onkeyup = function(event) {
	// user choice is whatever key was pressed
	var userChoice = event.key;
	// Generate random computer choice and store it in variable computerChoice
	var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
	

	// adds user guess to list if typed key is an alphabet letter
		document.onkeypress = function(event){
		
		if (event.keyCode >= 65 && event.keyCode <=90){
		guessesList.push(userChoice);
		}
	};

	


				// if user chooses computer guess, increase wins by 1
			if (userChoice === computerChoice){
				wins++;
				guessesList.push(userChoice);
				alert("You win!!")
				// prompt computer to choose a new random number and reset code
				guessesLeft=10;
				guessesList = [];
				
				
			}
			// if no more guesses and still not choosing computer choice, increase Losses by 1, reset guesses left and empty guesses list
			else {
				guessesLeft--;
				// prompt computer to choose a new random number and reset code
				}

			// if user choice does not equal computer choice, decrease guesses by 1 and add guess to list
			if (guessesLeft ===0){
				losses++;
				alert("Everyone loses sometimes. Try again?");
				guessesLeft=10;
				guessesList = [];
				
			}

		var html = 
		"<p> Wins: " + wins + "</p>" +
		"<p> Losses: " + losses + "</p>" +
		"<p> Guesses Left: " + guessesLeft + "</p>" +
		"<p> Guesses so Far: " + guessesList + "</p>";

		document.querySelector("#game").innerHTML = html;

	
};




	







