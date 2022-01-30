var x = 0;
var y = 0;
var circX = 785;
var circY = 368;
var squareX1 = 0;
var squareY = 0;
var squareX2 = 0;
var speedX = 10;
var speedY = 10;

function setup()
{
    createCanvas(1920,1080);
    squareX1 = 105;
    squareX2 = 1143;
    squareY = 368;
    
}
function draw()
{
    background(220);
    circle(circX,circY,55);
    square(squareX1,squareY,100);
    square(squareX2,squareY,100);
    text(x +"and"+ y, 100, 300);
    textSize(42);
    text("Pong", 762, 34);
    text("By: Aidan Sweet", 1171, 857)

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
}

if (squareY >= 300)
{
    speedY = 10;
    speedY = -speedY;
}
else if (squareY < 10)
{
    speedY = 10;
}
squareY = squareY + speedY;

function mouseMoved()
{
    x = mouseX;
    y = mouseY;
}