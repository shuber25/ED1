//adding a GIF to my grid

let gif;

function preload (){
gif = loadImage ('Assets/GIF_Huber.gif');
}

function setup() {
  //runs one time
  createCanvas(windowWidth, windowHeight);
  fill('magenta');
  strokeWeight(1);
}

function draw() {
  //runs in a loop


  var num = 8;
  var sideLen = windowWidth/num;

  for (var y = 0; y < 2 * windowHeight; y = y + sideLen) {
    //loop to create a grid in the y direction

    for (var x = 0; x < 2 * windowWidth; x = x + sideLen) {
image (gif, x, y, sideLen, sideLen);
    }
  }
}

function windowResized(){
  resizeCanvas (windowWidth, windowHeight);
}