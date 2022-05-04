class monte{
    constructor(x,y,size)
    {
        this.x = x
        this.y = y
        this.size = size
    }

    createSprite(x,y,size)
    {
        console.log("I am here")
        this.x= x
        this.y= y
        this.size= size
        new Image("./assets/monte.png")
    }
}