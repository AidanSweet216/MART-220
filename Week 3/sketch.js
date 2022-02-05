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
var img;

function preload() {
  img = loadImage('assets/ice.jpg');
}


function setup()
{
    createCanvas(1920,1080);
    squareX1 = 105;
    squareX2 = 1143;
    squareY1 = 368;
    buttonX = 125;
    buttonY = 850;
    
   

    
}
function draw()
{
    background(220);
    image(img, 0, 0);
    circle(circX,circY,55);
    square(squareX1,squareY1,100);
    square(squareX2,squareY2,100);
    square(buttonX,buttonY,150);
    text(x +"and"+ y, 100, 300);
    textSize(42);
    text("Pong", 762, 34);
    text("By: Aidan Sweet", 1171, 857);
    text("Back", 150, 925);
  

    if (circX >= 1143)
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

//if (squareY1 >= 300)
//{
    //speedY = 10;
  //  speedY = -speedY;
//}
//else if (squareY1 < 10)
//{
  //  speedY = 10;
//}
//squareY = squareY + speedY;

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

