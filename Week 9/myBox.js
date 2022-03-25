class myBox
{

    constructor(width, height, depth, locationX, locationY)
    {
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.locationX = locationX;
        this.locationY = locationY;
    }

    show()
    {
        box(this.width, this.height, this.depth,); 
    }

    translateBox()
    {
        translate(this.locationX, this.locationY);
    }

    rotateBox(amount)
    {
        rotateX(amount);
        rotateY(amount);

    }

}