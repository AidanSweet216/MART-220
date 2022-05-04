class Player1
{
    constructor(x,y,size)
    {
        this.x = x
        this.y = y
        this.size = size
    }

    drawSquare()
    {
        square(this.x, this.y, this.size)
    }
    
    mouseDragged()
{
   this.x = mouseX
   this.y = mouseY
}
}
