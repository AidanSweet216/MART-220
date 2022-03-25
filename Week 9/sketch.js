var img = [];
var boxes = [];


function setup()
{
    createCanvas(displayHeight,displayWidth, WEBGL);
    img[0] = loadImage("assets/rock2.jpg")
    img[1] = loadImage("assets/rock.png")
    img[2] = loadImage("assets/rock3.jpg")
    for(let i = 0; i < 5; i++)
    {
      let myB = new myBox(150,150,150,100,100);
      let my2B = new myBox(50,50,50,400, 100);
      let my3B = new myBox(100,100,100,200, -100);
      boxes.push(myB);
      boxes.push(my2B);
      boxes.push(my3B);

    }
   
}

function draw()
{
    background(200);
    for(let i = 0; i < boxes.length; i++)
{
  push();
  texture(img[1]);
  boxes[i].translateBox();
  boxes[i].rotateBox(frameCount * .01);
  boxes[i].show();
  pop();
}
  push();
  texture(img[0]);
  translate(-100,-100);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  sphere(100, 100, 100);
  pop();

  push();
  texture(img[2]);
  translate(300, 300);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  cone(200, 200, 200);
  pop();
  
  

  

}