/*
Lyteia Kitchen
September 23,2013
Goal 9 Assignment
*/
console.log("start canvas");
(function(){
    
    // creates a canvas element progammatically
	var canvas = document.createElement("canvas"); 
	// adds the canvas to the DOM 
	document.body.appendChild(canvas);
    // gain access to the canvas API 
    var ctx = canvas.getContext("2d");
    // set a width and height for the canvas
    canvas.width = 500;
    canvas.height = 450;

    // create and draw the image 
    var bg = new Image();
    bg.src = "bg.jpg";
    // add event listener to wait for the image to load, then display on the canvas
    bg.addEventListener('load', function(){
    	
    	// x, y, width, height
    	ctx.drawImage(bg, 0, 0, 500, 450);
    	// call function to display the chart/data
    	displayData();

    }, false);
    })();