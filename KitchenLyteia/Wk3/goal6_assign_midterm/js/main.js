/*
	* Mid Terms for PWA-1
	Lyteia Kitchen 
	September 16 , 2013
	Midterm
*/

console.log("Is it working");
(function (){
var students = [{
	Name:"DAdams",
	Address:"3300 University Winter Park Florida",
	GPA:[2.5,3.5,4.0]
},
{
	Name:"AHuell",
	Address:"3101 Whisper Lake Lane Winter Park Florida",
	GPA:[2.5,2.3,3.4]
}

];

//students[0]["name"]

//console.log(students);

for(var prop in students[0]){
		console.log(prop+ " " + students[0][prop]);
	}

	for(var prop in students[1]){
		console.log(prop+ " " + students[1][prop]);
	}

	console.log("----------New Object Added --------------")

	addStudent("MSlaugther","132 Test Dr,Orlando,Fl",[2.0,2.4,2.7]);

	for(var prop in students[0]){
		console.log(prop+ " " + students[0][prop]);
	}

	for(var prop in students[1]){
		console.log(prop+ " " + students[1][prop]);
	}


	for(var prop in students[2]){
		console.log(prop+ " " + students[2][prop]);
	}


	var avgGPA = average(students[2].GPA);
	console.log("Average GPA: " +Math.round(avgGPA));
	//console.log(students);

	function addStudent(n,a,g){
		var newStudent = {}
			newStudent.Name = n;
			newStudent.Address = a;
			newStudent.GPA = g;
			students.push(newStudent);
	}

	
	function average(n){
		var total = 0;
		n.forEach(function (e){
			total+=e;

		})

		return total/n.length;

	}
	

/*
	var myBtn = document.querySelector(".buttonred");
	document.querySelector(".buttonred").onclick = function buttonClick(){
		document.getElementById("name").innerHTML =  +guesses+


	}*/

	///document.querySelector(".buttonred").innerhtml = "DONE!!!!"









})();
