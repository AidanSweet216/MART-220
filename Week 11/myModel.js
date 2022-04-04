class myModel
{

    constructor(x, y, speed, skull, img)
    {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.skull = skull;
    this.img = img;
    }

    draw()
    {
push();
    translate(this.x,this.y)
    scale(-2); // Scaled to make model fit into canvas
    rotateX(frameCount * this.speed);
    rotateY(frameCount * this.speed);
    texture(this.img)
    noStroke();
    model(this.skull);
  pop();
    }

}