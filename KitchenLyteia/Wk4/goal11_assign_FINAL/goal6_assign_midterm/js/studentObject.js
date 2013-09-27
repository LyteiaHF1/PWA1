/*
* Mid Terms for PWA-1
Lyteia Kitchen 
September 27 , 2013
Final
*/
(function (){
	// Student Object Constructor Function
	function Student(name, street, city, state, gpa, date){
	this.name = name;
	this.address = street + ", " + city + ", " + state;
	this.gpa = gpa;
	this.date = date;
	this.gpaavg = 0;
	
	}

// Prototype That Calculates The Average GPA
Student.prototype.avgGpa = function(){

	var total = 0;
	this.gpa.forEach(function(e){
		total += e;
	 });
	 var avg = total / this.gpa.length;
	 var result = Math.round(avg*100)/100;
	 this.gpaavg = result;
	}
	
// Sets Student So The main.js Will Be Able To Access It
window.Student = Student;

})();