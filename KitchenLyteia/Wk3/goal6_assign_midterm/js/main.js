/*
* Mid Terms for PWA-1
Lyteia Kitchen 
September 16 , 2013
Midterm
*/
(function (){
console.log("Does It Work");
//array / object of students
var students = [
	{ 
		name:"DAdams",
		address:"3300 University Winter Park Florida",
		gpa:[2.5,3.5,4.0],
		date: getDate()	
		
	},

	{
		name:"AHuell",
		address:"3101 Whisper Lake Lane Winter Park Florida",
		gpa:[2.5,2.3,3.4],
		date: getDate()	

	}
];
//for in loop for 1st console log 
for(var prop in students[0]){
		console.log(prop+ " " + students[0][prop]);
	}
//for in loop for 1st console log 
	for(var prop in students[1]){
		console.log(prop+ " " + students[1][prop]);
	}
//va to change the dom 
var domStuff = {
	btn:document.querySelector(".buttonred"),
	name:document.querySelector("#name"),
	address:document.querySelector("#address"),
	gpa:document.querySelector("#gpa"),
	date:document.querySelector("#date"),
	gpaavg:document.querySelector("#gpaavg")
};
//counter 
var number = 0;

console.log("-----------2nd--------");
// Add a Student 
addStudent("MSlaugther","42 Whisper Lake Ln Winter Park Florida",[2.0,2.4,2.7] , getDate());

showAll(); // Console log all the students
st(); // Display 1st student(html)
domStuff.btn.addEventListener("click", onClick, false); // Add an event listner for the button

//function adds these things to elememts 
function st(){
	domStuff.name.innerHTML = "Name: " + students[number].name;
	domStuff.address.innerHTML = "Adress: " + students[number].address;
	domStuff.gpa.innerHTML = "GPA: " + students[number].gpa;
	domStuff.date.innerHTML = "Date: " + getDate();
	domStuff.gpaavg.innerHTML = "Average GPA: " + calcAvg(students[number].gpa);
}

// check if clicked through entire array
function showAll (){
	for (var a = 0; a<students.length; a++) {
	
	for (var prop in students[a]){
		console.log(prop + " " + students[a][prop]);
		};
	}
}
//new student 
function addStudent (n,a,g,d) {
	var newStudent = {};
	newStudent.name = n;
	newStudent.address = a;
	newStudent.gpa = g;;
	newStudent.date = d
	students.push(newStudent);
};

//on click
function onClick(){
		number++;
		domStuff.name.innerHTML = "Name: " + students[number].name;
		domStuff.address.innerHTML = "Adress: " + students[number].address;
		domStuff.gpa.innerHTML = "GPA: " + students[number].gpa;
		domStuff.date.innerHTML = "Date: " + getDate();
		domStuff.gpaavg.innerHTML = "Average GPA: " + calcAvg(students[number].gpa)
		fin();


};

function fin(){
	if (number == students.length - 1) {
		document.querySelector(".buttonred").innerHTML = "Done!!!";
		domStuff.btn.removeEventListener("click", onClick, false);
	}
}
//avg
function calcAvg (n) {
	var total = 0;

	n.forEach(function(e){
		total += e;
	})

	var avg = total / n.length;
	var result = Math.round(avg*100)/100;
	return result;
}

//date
function getDate (){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;

	var yyyy = today.getFullYear();
	if(dd<10){
		dd='0'+ dd;
	} 
	if(mm<10){
		mm='0'+ mm;
	} 
	today = mm+'/'+dd+'/'+yyyy;
	return today;
}



})();