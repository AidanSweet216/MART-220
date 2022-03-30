
let skull;
let img;
let boxes = [];
var rotateSpeed  =.01;
function preload(){
skull = loadModel('assets/skull.obj');
img = loadImage('assets/galaxy.jpg');
}

function setup() {
    createCanvas(displayWidth,displayHeight, WEBGL);
    boxes[0] = new myBox(50,50,50,200,500);
  }

  function draw()
  {
    background(200,200,250);
    push();
    scale(5); // Scaled to make model fit into canvas
    rotateX(frameCount * rotateSpeed);
    rotateY(frameCount * rotateSpeed);
    texture(img)
    noStroke();
  model(skull);
  pop();

 
  }

  function mousePressed()
  {
    rotateSpeed += 10;
  }