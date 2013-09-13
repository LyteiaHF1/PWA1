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
var fighters=[
		fighter1={name:"Spiderman", damage:20, health:100}, 
		fighter2={name:"Batman", damage:20, health: 100}
];

var round = 0;

document.getElementById("fight_btn").onclick = function fight(){
		var fighter1minDam=fighters[0].damage*.5;
		var fighter2minDam=fighters[1].damage*.5;
		var f1=Math.floor(Math.random()*(fighters[0].damage-fighter1minDam)+fighter1minDam);
		var f2=Math.floor(Math.random()*(fighters[1].damage-fighter2minDam)+fighter2minDam);

		//inflict damage
		fighters[0].health-=f1;
		fighters[1].health-=f2;

		console.log(fighters[0].name+";"+fighters[0].health+" "+fighters[1].name+";"+fighters[1].health);

		var results = winnerCheck();
		console.log(results);

		if(results==="no winner"){
			round++;
			document.querySelector("#kabal p").innerHTML = fighters[0].health+" <br/> "+fighters[0].name;
			document.querySelector("#kratos p").innerHTML = fighters[1].health+" <br/> "+fighters[1].name;
			document.getElementById("round").innerHTML = "Round "+round+" - "+results;
		}
		else{
			document.querySelector("#kabal p").innerHTML = fighters[0].health+" <br/> "+fighters[0].name;
			document.querySelector("#kratos p").innerHTML = fighters[1].health+" <br/> "+fighters[1].name;
			document.getElementById("round").innerHTML = "Round "+round+" - "+results;
			document.getElementById("fight_btn").onclick = "event.cancelBubble = true";
			document.querySelector(".buttonblue").innerHTML = "RESET";

			
			document.querySelector("#fight_btn .buttonblue").onclick = function reset(){
				window.location.reload();
			}
		}
	}

function winnerCheck(){

		var result="no winner";

		if(fighters[0].health<1 && fighters[1].health<1){
			result="You Both Die";
		}
		else if (fighters[0].health<1){
			result=fighters[1].name+" Wins";
		}
		else if (fighters[1].health<1){
			result=fighters[0].name+" Wins";
		}
		return result;
	}
//program starts here
//fight();

}());

