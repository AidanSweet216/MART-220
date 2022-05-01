var mainColor = 255;

function setup() {
    createCanvas(640, 480);
    background(0);
    frameRate(25);
    noStroke();
    rectMode(CENTER);
}
function draw() {
    fill(random(mainColor),random(mainColor),random(mainColor), random(100));

    var size= random(400);

    circle(random(width), random(height), size);
    square(random(width),random(height), size);
    triangle(random(width),random(height),random(width),random(height),random(width),random(height),size);

    if (frameCount % 2 == 0) {
        mainColor = 255 - mainColor; 
    }
    saveFrames("Movie",".png",1,25);

    if (frameCount > 25) { 
        noLoop();
    }
}
  