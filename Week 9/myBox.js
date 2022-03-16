class myBox
{

    constructor(width, height, depth, detailX, detailY, locationX, locationY)
    {
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.detailX = detailX;
        this.detailY = detailY;
        this.locationX = locationX;
        this.depth.locationY = locationY;
    }

    show()
    {
        box(this.width, this.height, this.depth, this.detailX, this.detailY); 
    }

    translateBox()
    {
        translate(this.locationX, this.locationY);
    }

}