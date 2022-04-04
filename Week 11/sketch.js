
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
    for(let i = 0; i <5; i ++ )
   {
     myModelObject[i]= new myModel (random (0,500),random(0,500),.01,skull,img);

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

function mouseClicked()
{
    this.x = mouseX-width/2;
    this.y = mouseY-height/2;
    myModelObject.updateX(this.x);
    myModelObject.updateY(this.y);
   
}
  }

  
