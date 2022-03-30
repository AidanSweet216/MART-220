
let skull;
let img;
let skulls = [];
var rotateSpeed  =.01;
var myModelObject = [];
function preload(){
skull = loadModel('assets/skull.obj');
img = loadImage('assets/galaxy.jpg');
}

function setup() {
    createCanvas(displayWidth,displayHeight, WEBGL);
    for(let i = 0; i <2; i ++ )
   {
     myModelObject[i]= new myModel (random (0,displayWidth),random(0,displayHeight),.01,skull,img);

   }
  
  }

  function draw()
  {
    background(200,200,250);
    for(let i = 0; i < myModelObject.length; i ++)
    {
      myModelObject[i].draw();
    }
  
    

  /*push();
    scale(5); // Scaled to make model fit into canvas
    rotateX(frameCount * rotateSpeed);
    rotateY(frameCount * rotateSpeed);
    texture(img)
    noStroke();
    model(skull);
  pop();
*/

 
  }

  function mousePressed()
  {
    rotateSpeed += 10;
  }