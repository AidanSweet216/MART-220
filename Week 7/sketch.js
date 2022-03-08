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
var result = [];
var monteObject;
var rockObject;
function preload() {
  names = loadStrings("./assets/Spin.txt");
  img = loadImage('assets/ice.jpg');
  myImages[0] = img
  myFont = loadFont('assets/Rowdies-Regular.ttf');
}

function setup()
{
    createCanvas(windowWidth-20, windowHeight-20);
    console.log(names);
    setInterval(timeIt, 1000);
    monteObject = createSprite(100,400);
    //monteObject = loadAnimation(names[0], names[names.length-1])
    monteObject.addAnimation(names[0], names[names.length-1]);
    rockObject = createSprite(1500,400);
    rockObject.addImage(loadImage('assets/rocks.png'));
    textFont(myFont);
    textSize(36);
    text('p5*js', 10, 50);
    //square1 = new mySquare(105,368,100);
    //square2 = new mySquare(1400,368,100);
    //square3 = new mySquare(125,600,125);
    for(var k = 0; k < names.length; k++)
    {
      // load the image
      img = loadImage("./assets/animation/" + names[k]);
      // create an object from our image class
      imageClassObject = new imageClass(img, 650, 300, 75, 75);
      // add each object to the array
      imagesToDisplay[k] = imageClassObject;
    }
    
    
}
function draw()
{
    background(220);
    image(myImages[0], 0, 0,);
    //square1.drawSquare();
   // square1.moveSquare();
   // square2.drawSquare();
  //  square2.moveSquare();
  //  square3.drawSquare();
    animation(monteObject,800,385,);
    drawSprites();
    if(keyDown('d'))
    {
      monteObject.changeAnimation('names');
      monteObject.velocity.x += .5;
      if(monteObject.collide(rockObject))
      {
        monteObject.velocity.x = -5 ;
      }
    }

    if(keyDown('a'))
    {
      monteObject.velocity.x = -5;
    }

    
    /*image(imagesToDisplay[i].getImage(),
		imagesToDisplay[i].getX(), 
		imagesToDisplay[i].getY(), 
		imagesToDisplay[i].getW(),
		imagesToDisplay[i].getH());
   /* push();
    translate(start + x, height/2-100); 
    // then rotate the grid around the pivot point by a
    // number of degrees equal to the frame count of the sketch
    rotate(radians(frameCount));
    imageMode(CENTER);
    image(myImages[1],0,0, 75, 75);
    pop();
    if(x < 0 || x > width)
    {
        speedX *= -1;
    }
    x+=speedX;
    */
    //square(squareX[3],squareY[2],150);
    text(x +"and"+ y, 100, 300);
    textSize(42);
    text("Griz Pong", 650, 34);
    text("By: Aidan Sweet", 1171, 857);
    text("Back", 135, 675);

   if (timerValue >= 30) {
    text("0:" + timerValue, 700,  70);
  }
  if (timerValue < 30) {
    text('0:' + timerValue, 700, 70);
  }
  if (timerValue == 0) {
    text('Game Over',  625, 100);
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

    