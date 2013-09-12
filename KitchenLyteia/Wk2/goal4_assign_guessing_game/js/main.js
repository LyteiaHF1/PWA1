/**
 * GUESSING GAME:
 *
 * Created By: Lyteia Kitchen
 * Date: September 12.2013
 * 
 * GUESSING GAME
 */

//Game variables
(function () {
var guess = Math.round(Math.random()*(9)+1);
console.log(guess);
var guesses = 0;

document.querySelector("button").onclick = function game(){
		if(guesses<3){
			var num = document.querySelector("form #input").value;

			guesses++;

			if(num == ""){
				document.getElementById("output").innerHTML = "Guess my magic number between 1-10 <br/> Guess "+guesses+" - You didn't guess anything!!!!";
				return false;
			}else if (num > 10){
				document.getElementById("output").innerHTML = "Guess my magic number between 1-10 <br/> Guess "+guesses+" - "+num+" is too high!!!!! Try coming down!";
				return false;
			}else if (num < 1){
				document.getElementById("output").innerHTML = "Guess my magic number between 1-10 <br/> Guess "+guesses+" - "+num+" is too low!!!!! Try coming up!";
				return false;
			}else{
				if(num < guess){
					document.getElementById("output").innerHTML = "Guess my magic number between 1-10 <br/> Guess "+guesses+" - My number is higher than "+num;
					return false;
				}else if(num > guess){
					document.getElementById("output").innerHTML = "Guess my magic number between 1-10 <br/> Guess "+guesses+" - My number is lower than "+num;
					return false;
				}else{
					document.getElementById("output").innerHTML = "WINNER!!!!! "+num+" is correct!!!";
					document.querySelector("form button").onclick = "event.cancelBubble = true";
					document.querySelector("form button").innerHTML = "RESET";
					document.querySelector("form button").onclick = function reset(){
						window.location.reload();
					}
					return false;
				}
				return false;
			}
		}else{
			document.getElementById("output").innerHTML = "You've had "+guesses+" guesses - Too Many Guesses, You SUCK!!!!";
			document.querySelector("form button").onclick = "event.cancelBubble = true";
			document.querySelector("form button").innerHTML = "RESET";
			document.querySelector("form button").onclick = function reset(){
				window.location.reload();
			}
			return false;
		}
	};		
	


})();