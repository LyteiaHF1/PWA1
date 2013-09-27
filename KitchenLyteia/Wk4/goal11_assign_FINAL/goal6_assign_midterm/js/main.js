/*
* Mid Terms for PWA-1
Lyteia Kitchen 
September 27 , 2013
Final
*/
(function (){
console.log("Does It Work");
//An Empty Array To Hold Students
	var students = [];
	
	var studentOne = new Student("DAdams", "3300 University Blvd", "Winter Park", "Florida",[2.5,3.5,4.0], getDate());
	var studentTwo = new Student("AHuell", "3101 Whisper Lake Lane", "Winter Park", "Florida",[2.5,2.3,3.4], getDate());
	//Add The Students To The Students Array
	students = [studentOne, studentTwo];
	console.log("-----1st-----");
	showAll();// Console Log 1st Set Of Students;
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

	console.log("-----2nd-----");
	// Add a Student 
	var studentThree = new Student("MSlaughter", "42 Whisper Lake Ln", "Winter Park", "Florida",[2.0,2.4,2.7], getDate());
	students.push(studentThree);
/*
addStudent("MSlaugther","42 Whisper Lake Ln Winter Park Florida",[2.0,2.4,2.7] , getDate());
*/
showAll();// Console log all the students
calcAvg();//Call The Function To Average GPA's
st(); // Display 1st student(html)
domStuff.btn.addEventListener("click", onClick, false); // Add an event listner for the button

//function adds these things to elememts 
function st(){
	domStuff.name.innerHTML = "Name: " + students[number].name;
	domStuff.address.innerHTML = "Adress: " + students[number].address;
	domStuff.gpa.innerHTML = "GPA: " + students[number].gpa;
	domStuff.date.innerHTML = "Date: " + getDate();
	domStuff.gpaavg.innerHTML = "Average GPA: " + students[number].gpaavg;
}

// check if clicked through entire array
function showAll (){
	for(var i = 0, max = students.length; i < max; i++){
			console.log("Name: " + students[i].name);
			console.log("Address: " + students[i].address);	
			console.log("GPA: "  + students[i].gpa);
			console.log("Date: " + students[i].date);
		};
	}

//Changed Loop So That The avgGpa Function Doesnt Show In The Console
//It Still Works With This Loop But This Loop Makes The Console Look Cluddred
//With The Function Showing 
	//for (var a = 0; a<students.length; a++) {
	//for (var prop in students[a]){
		//console.log(prop + " " + students[a][prop]);
		//};
	//}
/*
//new student 
function addStudent (n,a,g,d) {
	var newStudent = {};
	newStudent.name = n;
	newStudent.address = a;
	newStudent.gpa = g;;
	newStudent.date = d
	students.push(newStudent);
};
*/
//on click
function onClick(){
		number++;
		domStuff.name.innerHTML = "Name: " + students[number].name;
		domStuff.address.innerHTML = "Adress: " + students[number].address;
		domStuff.gpa.innerHTML = "GPA: " + students[number].gpa;
		domStuff.date.innerHTML = "Date: " + getDate();
		domStuff.gpaavg.innerHTML = "Average GPA: " + students[number].gpaavg;
		fin();
}
function fin(){
	if (number == students.length - 1) {
		document.querySelector(".buttonred").innerHTML = "Done!!!";//change to done after all is looped thru
		domStuff.btn.removeEventListener("click", onClick, false);//remove event listener 
	}
}
//avg

function calcAvg(){
		// a foreach loop is used to call the prototype function for each student
		students.forEach(function(e){
			e.avgGpa();
		});	
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