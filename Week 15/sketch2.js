function setup() {
    createCanvas(800, 600);
    img = createImage(230, 230);
    img.loadPixels();
    for (let x = 0; x < img.width; x++) {
      for (let y = 0; y < img.height; y++) {
        let a = map(y, 0, img.height, 255, 0);
        img.set(x, y, [0, 153, 204, a]);
      }
    }
    img.updatePixels();
  }
  
  function draw() {
    background(0);
    //image(img, 90, 80);
    //image(img, 150, 200);
   makeImage();
  }

  function makeImage()
  {
    image(img, 90, 80);
    image(img, -10, 10);
    image(img, 200, 200);
    image(img, 400, 300);
    image(img, 500, 200);
    image(img, 600, 90);
  }