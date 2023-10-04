//Create a reference for canvas 
cnavas= document.getElementById("myCanvas");
tasty= canvas.getContext("2d");

//Give specific height and width to the car image
greencar_width= 85;
greencar_height= 100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x=5;
greencar_y=225;
function add() 
	{
		background_imgTag= new Image();
		background_imgTag.onload= uploadBackground;
		background_imgTag.src= background_image;

		greencar_imgTag= new Image();
		green_imgTag.onload= uploadgreencar;
		green_imgTag.src= greencar_image;
	}

function uploadBackground() {
	tasty.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	tasty.drawImage(greencar_imgTag, greencar_x,greencar_y, greencar.width, greencar.height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(green_y>=0)
	{
		green_y= green_y-10;
		console.log("when up arrow is pressed x=", greencar_x + "y="+greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(green_y<=300)
	{
		green_y= green_y+10;
		console.log("when up arrow is pressed x=", greencar_x + "y="+greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if(green_x>=0)
	{
		green_y= green_y-10;
		console.log("when up arrow is pressed x=", greencar_x + "y="+greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if(green_x<=700)
	{
		green_y= green_y+10;
		console.log("when up arrow is pressed x=", greencar_x + "y="+greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

window.addEventlistener("keydown", my_keydown);
