/*
Lyteia Kitchen
September 4,2013
Assignment: Goal1: Assignmnet: Duel Battle 1
*/

//self-executing function
(function(){
	console.log("FIGHT!!!");

	//Player Name
var playerOneName = "SpiderMan";
var playerTwoName = "Batman";

//Player Damage
var playerOneDamage = 20;
var playerTwoDamage = 20;

//Player Health
var playerOneHealth = 100;
var playerTwoHealth = 100;

var round = 0;

function fight(){
	//console.log("In the fight function");
	alert(playerOneName+ ":"+playerOneHealth+ "*START* "+playerTwoName + ":" + playerTwoHealth)
	for(var i =0; i<10; i++){
		//console.log(i);
		//random formula --- Math.floor(Math.random()*(max-min)+ min)
		var minDamage1 = playerOneDamage *.5;
		var minDamage2 = playerTwoDamage *.5;
		var f1 = Math.floor(Math.random()*(playerOneDamage - minDamage1)+minDamage1);
		var f2 = Math.floor(Math.random()*(playerTwoDamage - minDamage2)+minDamage2);

		//console.log(f1);
		//console.log(f2);

		//damge
		playerOneHealth -=f1;
		playerTwoHealth -=f2;

		//console.log(playerOneHealth);
		//console.log(playerTwoHealth);
		console.log(playerOneName+ ":"+playerOneHealth+ " "+playerTwoName + ":" + playerTwoHealth)
		
		var results = winnerCheck();
		console.log(results)

		if(results ==="no winner"){
			round++;
			alert(playerOneName+ ":"+playerOneHealth+ "*ROUND "+round+ "OVER*"+playerTwoName + ":" + playerTwoHealth)
		}else{
			alert(results);
			break;
		}


	}
	
}
function winnerCheck(){
	console.log("In Winner Check");
	//function checks if there is a winner
	var result = "no winner";
	if(playerOneHealth<1 && playerTwoHealth<1){
		result = "You Both Die";
	}else if(playerOneHealth<1){
		result = playerTwoName+ " WINS!!!"
	}else if(playerTwoHealth<1){
		result = playerOneName+ " WINS!!!"
	}

	return result;
}
//program starts here
fight();

}());

