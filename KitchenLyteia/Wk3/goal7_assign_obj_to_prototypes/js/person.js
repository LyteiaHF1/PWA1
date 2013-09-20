/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 * Lyteia Kicthen
 * September 18,2013
 */
 (function(){

	// Person Object Constructer Function
	var Person = function(name, row){

		// Sets Eveything For The Person
	 	this.name = name;
	 	this.action = Person.actions[Math.floor(Math.random() * Person.actions.length)];
	 	this.job = Person.jobs[Math.floor(Math.random() * Person.jobs.length)];
	 	this.row = row;

	 	//Updates the html
	 	var id = document.getElementById("r"+this.row+"c3");
	 	id.innerHTML = this.action;
	}

	// Sets Person So That Main.js Will Be Able To Access It
	window.Person = Person;

	// defines all the job and action choices for each person
	Person.jobs = ["Dancer", "Rapper", "Student", "Developer", "Designer"];
	Person.actions = ["Sleeping", "Eating", "Working"];

	// update function to change the actions randomly
	Person.prototype.update = function(){

		// keeps it from constantly changing the actions everytime the update is called
		if(Math.floor(Math.random() < .01)){

			// Action is changed
			this.action = Person.actions[Math.floor(Math.random() * Person.actions.length)];

			
			var id = document.getElementById("r"+this.row+"c3");
	 		id.innerHTML = this.action;
		}

	}

 })();
