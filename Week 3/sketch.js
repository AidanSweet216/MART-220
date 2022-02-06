var x = 0;
var y = 0;
var circX = 785;
var circY = 368;
var squareX1 = 0;
var squareY1 = 0;
var squareY2 = 368;
var squareX2 = 0;
var speedX = 10;
var speedY = 10;
var buttonX = 0;
var buttonY = 0;
var timerValue = 30;
let img;
let img2;
let myFont;
function preload() {
  img = loadImage('assets/ice.jpg');
  img2 = loadImage('assets/monte.png')
  myFont = loadFont('assets/Rowdies-Regular.ttf');
}


function setup()
{
    createCanvas(1920,1080);
    setInterval(timeIt, 1000);
    img = loadImage('assets/ice.jpg');
    squareX1 = 105;
    squareX2 = 1600;
    squareY1 = 368;
    buttonX = 125;
    buttonY = 850;
    textFont(myFont);
  textSize(36);
  text('p5*js', 10, 50);
  
 

    
   

    
}
function draw()
{
    background(220);
    image(img, 0, 0,);
    image(img2,circX,circY, 70,70);
    square(squareX1,squareY1,100);
    square(squareX2,squareY2,100);
    square(buttonX,buttonY,150);
    text(x +"and"+ y, 100, 300);
    textSize(42);
    text("Griz Pong", 762, 34);
    text("By: Aidan Sweet", 1171, 857);
    text("Back", 150, 925);

    //call timer
    //text(timer, 50, 50);
    //timer--
   // print(timer);
    //if(timer == 0)
    //{
      //text("game over");
     // timer++
   // }
   if (timerValue >= 30) {
    text("0:" + timerValue, 815,  70);
  }
  if (timerValue < 30) {
    text('0:' + timerValue, 815, 70);
  }
  if (timerValue == 0) {
    text('Game Over',  750, 100);
    speedX--
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

    moveSquare();
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
      
      }
       if(key == 'w')
      {
        squareY1-=5;
      }
      else if(key == 's')
      {
        squareY1+=5;
      }
      
    }
    function timeIt() {
      if (timerValue > 0) {
        timerValue--;
      }
    }


