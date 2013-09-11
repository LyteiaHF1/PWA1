/*
Lyteia Kitchen
September 10,2013
Assignment: Goal4: Assignmnet: Duel Battle 3
*/

//self-executing function
(function(){
	console.log("FIGHT!!!");

	//Player Name
//var playerOneName = "SpiderMan";
//var playerTwoName = "Batman";

//Player Damage
//var playerOneDamage = 20;
//var playerTwoDamage = 20;

//Player Health
//var playerOneHealth = 100;
//var playerTwoHealth = 100;

//Using arrays to store player name,damgae and health
var fighter1 = ["Spiderman",20,100];//Player name, Player Damage, Player Health
var fighter2 = ["Batman",20,100];//Player name, Player Damage, Player Health

var round = 0;

function fight(){
	//console.log("In the fight function");
	//alert(playerOneName+ ":"+playerOneHealth+ "*START* "+playerTwoName + ":" + playerTwoHealth)
	alert(fighter1[0]+ ":"+fighter1[2]+ "*START* "+fighter2[0] + ":" + fighter2[2]);
	for(var i =0; i<10; i++){
		//console.log(i);
		//random formula --- Math.floor(Math.random()*(max-min)+ min)
		//var minDamage1 = playerOneDamage *.5;
		var minDamage1 = fighter1[1] *.5;
		//var minDamage2 = playerTwoDamage *.5;
		var minDamage2 = fighter2[1] *.5;

		//var f1 = Math.floor(Math.random()*(playerOneDamage - minDamage1)+minDamage1);
		var f1 = Math.floor(Math.random()*(fighter1[1] - minDamage1)+minDamage1);//fighter1[1] the # in the brackets is the place in the array where that value is arrays start at 0
		//var f2 = Math.floor(Math.random()*(playerTwoDamage - minDamage2)+minDamage2);
		var f2 = Math.floor(Math.random()*(fighter2[1] - minDamage2)+minDamage2);//fighter2[1] the # in the brackets is the place in the array where that value is arrays start at 0

		//console.log(f1);
		//console.log(f2);

		//damge
		//playerOneHealth -=f1;
		fighter1[2] -=f1;//fighter1 [2] health is the third value in the array which makes it 2
		//playerTwoHealth -=f2;
		fighter2[2] -=f2;

		//console.log(playerOneHealth);
		//console.log(playerTwoHealth);
		//console.log(playerOneName+ ":"+playerOneHealth+ " "+playerTwoName + ":" + playerTwoHealth)
		console.log(fighter1[0]+ ":"+fighter1[2]+ " "+fighter2[0] + ":" + fighter2[2])

		
		var results = winnerCheck();
		console.log(results)

		if(results === "no winner"){
			round++;
			alert(fighter1[0]+ ":"+fighter1[2]+ "*ROUND "+round+ "OVER*"+fighter2[0] + ":" + fighter1[2])
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
	if(fighter1[2]<1 && fighter2[2]<1){//if fighter 1 health is less than 1 && fighter2 health is less than 1 they both die
		result = "You Both Die";
	}else if(fighter1[2]<1){
		result = fighter2[0]+ " WINS!!!"
	}else if(fighter2[2]<1){
		result = fighter1[0]+ " WINS!!!"
	}

	return result;
}
//program starts here
fight();

}());

