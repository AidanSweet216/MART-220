var img = [];


function setup()
{
    createCanvas(displayHeight,displayWidth, WEBGL);
    img[0] = loadImage("assets/rock2.jpg")
    img[1] = loadImage("assets/rock.png")
    img[2] = loadImage("assets/rock3.jpg")
}

function draw()
{
    background(200);
    push();
  texture(img[0]);
  translate(-100,-100);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(150, 150, 150);
  pop();

  push();
  texture(img[1]);
  translate(100,100);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(300, 300, 300);
  pop();

  push();
  texture(img[2]);
  translate(300,-200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(200, 200, 200);
  pop();
}