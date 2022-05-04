class Player2
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
      
      
       if(key == 'e')
      {
        this.y-=5;
      }
      else if(key == 'd')
      {
        this.y+=5;
      }
    }
}
}
