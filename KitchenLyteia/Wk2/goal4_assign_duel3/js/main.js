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
var fighter1 = {name:Spiderman,damage:20,health:100};//Player name, Player Damage, Player Health
var fighter2 = {name:Batman,damage:20,health:100};//Player name, Player Damage, Player Health

var round = 0;

function fight(){
	//console.log("In the fight function");
	//alert(playerOneName+ ":"+playerOneHealth+ "*START* "+playerTwoName + ":" + playerTwoHealth)
	alert(fighter1.name+ ":"+fighter1.health+ "*START* "+fighter2.name + ":" + fighter2.health);
	for(var i =0; i<10; i++){
		//console.log(i);
		//random formula --- Math.floor(Math.random()*(max-min)+ min)
		//var minDamage1 = playerOneDamage *.5;
		var minDamage1 = fighter1.damage *.5;
		//var minDamage2 = playerTwoDamage *.5;
		var minDamage2 = fighter2.damage *.5;

		//var f1 = Math.floor(Math.random()*(playerOneDamage - minDamage1)+minDamage1);
		var f1 = Math.floor(Math.random()*(fighter1.damage - minDamage1)+minDamage1);//fighter1[1] the # in the brackets is the place in the array where that value is arrays start at 0
		//var f2 = Math.floor(Math.random()*(playerTwoDamage - minDamage2)+minDamage2);
		var f2 = Math.floor(Math.random()*(fighter2.damage - minDamage2)+minDamage2);//fighter2[1] the # in the brackets is the place in the array where that value is arrays start at 0

		//console.log(f1);
		//console.log(f2);

		//damge
		//playerOneHealth -=f1;
		fighter1.health -=f1;//fighter1 [2] health is the third value in the array which makes it 2
		//playerTwoHealth -=f2;
		fighter2.health -=f2;

		//console.log(playerOneHealth);
		//console.log(playerTwoHealth);
		//console.log(playerOneName+ ":"+playerOneHealth+ " "+playerTwoName + ":" + playerTwoHealth)
		console.log(fighter1.name+ ":"+fighter1.health+ " "+fighter2.name + ":" + fighter2.health)

		
		var results = winnerCheck();
		console.log(results)

		if(results === "no winner"){
			round++;
			alert(fighter1.name+ ":"+fighter1.health+ "*ROUND "+round+ "OVER*"+fighter2.name + ":" + fighter2.health)
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
	if(fighter1.health<1 && fighter2.health<1){//if fighter 1 health is less than 1 && fighter2 health is less than 1 they both die
		result = "You Both Die";
	}else if(fighter1.health<1){
		result = fighter2.name+ " WINS!!!"
	}else if(fighter2.health<1){
		result = fighter1.name+ " WINS!!!"
	}

	return result;
}
//program starts here
fight();

}());

