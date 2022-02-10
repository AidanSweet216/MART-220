var x = 0;
var y = 0;
var circX = 785;
var circY = 368;
var squareX = [];
var squareY = [];
var speedX = 10;
var speedY = 10;
var timerValue = 30;
var myImages = [];
let img;
let myFont;
function preload() {
  img = loadImage('assets/ice.jpg');
  myImages[0] = img
  img = loadImage('assets/monte.png')
  myImages[1] = img
  myFont = loadFont('assets/Rowdies-Regular.ttf');
}


function setup()
{
    createCanvas(1920,1080);
    setInterval(timeIt, 1000);
    img = loadImage('assets/ice.jpg');
    squareX [1] = 105;
    squareX [2] = 1600;
    squareX [3] = 125;
    squareY [1] = 368;
    squareY [2] = 850;
    textFont(myFont);
    textSize(36);
    text('p5*js', 10, 50);
  
 

    
   

    
}
function draw()
{
    background(220);
    image(myImages[0], 0, 0,);
    //translate(0,0);
    //rotate(90);
    image(myImages[1],circX,circY, 70,70);

    if(x <= 0 || x >= width-100)
    {
        speedX*=-1
    }
    x+=speedX;

    square(squareX[1],squareY[1],100);
    square(squareX[2],squareY[1],100);
    square(squareX[3],squareY[2],150);
    text(x +"and"+ y, 100, 300);
    textSize(42);
    text("Griz Pong", 762, 34);
    text("By: Aidan Sweet", 1171, 857);
    text("Back", 150, 925);
    moveSquare();

   if (timerValue >= 30) {
    text("0:" + timerValue, 815,  70);
  }
  if (timerValue < 30) {
    text('0:' + timerValue, 815, 70);
  }
  if (timerValue == 0) {
    text('Game Over',  750, 100);
    speedX = 0;
  }

  
    if (circX >= 1600)
    {
        speedX = 10;
        speedX = -speedX;
    }
    else if (circX < 208)
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

function moveSquare()
{
    if(keyIsPressed)
    {
      
      
       if(key == 'w')
      {
        squareY[1]-=5;
      }
      else if(key == 's')
      {
        squareY[1]+=5;
      }
    }
    }
    function timeIt() {
      if (timerValue > 0) {
        timerValue--;
      }
      
    }


