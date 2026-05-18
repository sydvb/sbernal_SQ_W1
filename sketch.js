// ------------------------------------------------------------
// preload()
// Runs once before setup(). Always load images and sounds here
// so they are ready before the sketch tries to use them.
// If you load images inside setup() they may not appear.
// ------------------------------------------------------------
function preload() {
  // loadImage() takes a file path relative to index.html
  // The image is stored in the variable so we can use it later
  map = loadImage("assets/images/metro-map.png");
}

// ------------------------------------------------------------
// setup()
// Runs once at the very start of the sketch.
// Use it to set up your canvas and draw things that
// only need to appear once (not animated).
// ------------------------------------------------------------
function setup() {
  // createCanvas(width, height) sets the size of your canvas in pixels
  createCanvas(800, 450);

  // background() fills the canvas with a colour
  // A single number = greyscale (0 is black, 255 is white)
  background(30);

  // ----------------------------------------------------------
  // SECTION 1: TEXT
  // ----------------------------------------------------------

  // fill() sets the colour used for shapes AND text
  // Three numbers = red, green, blue (each 0–255)
  fill(255, 255, 255); // white

  // textSize can be changed at any point — it applies to text drawn after it
  textSize(16);

  // width and height are built-in p5.js variables that
  // always hold the canvas width and height
  fill(240);
  textAlign(CENTER);
  text("EXPLORE THE NEVER-ENDING CITY.", width / 2, 20);

  // ----------------------------------------------------------
  // SECTION 2: DISPLAYING AN IMAGE
  // ----------------------------------------------------------

  // image(img, x, y, width, height) draws a loaded image
  // x and y are the TOP-LEFT corner of the image
  // The last two arguments resize the image to fit that space
  imageMode(CENTER);
  image(map, width / 2, height / 2, width - 100, height - 60);

  // ----------------------------------------------------------
  // SECTION 3: DRAWING SHAPES
  // ----------------------------------------------------------

  let circleX = width / 5;
  let circleY = height / 2;

  noStroke();
  fill(232, 207, 53);
  ellipse(circleX, circleY, 100, 100);
  ellipse(circleX, circleY + 90, 100, 100);

  fill(255);
  ellipse(circleX, circleY, 60, 60);
  ellipse(circleX, circleY + 90, 60, 60);
}
