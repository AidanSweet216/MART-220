class mySquare
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
    
    moveSquare()
{
    if(keyIsPressed)
    {
      
      
       if(key == 'w')
      {
        this.y-=5;
      }
      else if(key == 's')
      {
        this.y+=5;
      }
    }
}
}
