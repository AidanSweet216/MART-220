var x = 0;
var y = 0;
var circX = 785;
var circY = 368;
var speedX = 10;
var speedY = 10;
var timerValue = 30;
var myImages = [];
var i = [];
var imagesToDisplay = [];
var imageClassObject;
var names = [];
var start = 100;
let img;
let myFont;
let monteObject;
function preload() {
  names = loadStrings("./assets/Spin.txt");
  img = loadImage('assets/ice.png');
  myImages[0] = img
  myFont = loadFont('assets/Rowdies-Regular.ttf');
}

function setup()
{
    createCanvas(1920, 1080);
    setInterval(timeIt, 1000);
    textFont(myFont);
    textSize(36);
    text('p5*js', 10, 50);
    monteObject= new monte(100,200,50);
    Player_1 = new Player1(105,368,100);
    Player_2 = new Player2(1400,368,100);
    for(var k = 0; k < names.length; k++)
    {
      // load the image
     // img = loadImage("./assets/animation/" + names[k]);
      // create an object from our image class
      //imageClassObject = new imageClass(img, 650,300, 75, 75);
      // add each object to the array
     // imagesToDisplay[k] = imageClassObject;
    }
    setInterval(changeTheDarnAnimation, 100);
    
}
function draw()
{
    background(220);
    monteObject.createSprite();
    image(myImages[0], 0, 0,);
    Player_1.drawSquare();
    Player_1.mouseDragged();
    Player_2.drawSquare();
    Player_2.moveSquare();
    //image(imagesToDisplay[i].getImage(),
		//imagesToDisplay[i].getX(), 
		//imagesToDisplay[i].getY(), 
		//imagesToDisplay[i].getW(),
	//	imagesToDisplay[i].getH());
  
    text(x +"and"+ y, 100, 300);
    textSize(42);
    text("Griz Pong", 880, 34);
    text("By: Aidan Sweet", 1500, 1000);
    text("Back", 60, 1000);

   if (timerValue >= 30) {
    text("0:" + timerValue, 920,  70);
  }
  if (timerValue < 30) {
    text('0:' + timerValue, 920, 70);
  }
  if (timerValue == 0) {
    text('Game Over',  880, 100);
    speedX = 0;
  }

  
    if (circX >= 1350)
    {
        speedX = 10;
        speedX = -speedX;
    }
    else if (circX < 105)
    {
        speedX = 10;
    }
    circX = circX + speedX;

  }

function mouseMoved()
{
    x = mouseX;
    y = mouseY;
}

    function timeIt() {
      if (timerValue > 0) {
        timerValue--;
      }
      
    }

    function changeTheDarnAnimation()
{
	
	i+=1;

	if(i >= imagesToDisplay.length)
	{
		
		i = 0;
	}
}


