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
	
			// check if user input is alphabetical
			// document.onkeyup = function(event){
 // 		   if (event.key >= 65 && event.key <=90){
    		// guessesList.push(userChoice);
 //    		}
	// 	};
	// 			
					// reset function to call to reset game
	// 			function reset() {
 // -				var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
 // -				var guessesLeft = 10;
 // -				var guessesList = [];
 // -			}

			// if user chooses computer guess, increase wins by 1
			if (userChoice === computerChoice){
				wins++;
				guessesList.push(userChoice);
				alert("You win!!")
				// prompt computer to choose a new random number and reset code
				guessesLeft=10;
				guessesList = [];
				var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
				
				
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
				guessesLeft=10;
				guessesList = [];
				var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
				
			}

		var html = 
		"<p> Wins: " + wins + "</p>" +
		"<p> Losses: " + losses + "</p>" +
		"<p> Guesses Left: " + guessesLeft + "</p>" +
		"<p> Guesses so Far: " + guessesList + "</p>";

		document.querySelector("#game").innerHTML = html;

	
};




	







