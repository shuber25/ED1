//adding a GIF to my Grid

let gif;

	function preload () {
	gif = loadImage ('Assets/GIF_Huber.gif' );
	}

function setup() {
  //runs one time
  createCanvas(windowWidth,windowHeight);
  fill('lightgrey');
  stroke ('white');
  strokeweight (1);
}

function draw() {
  //runs in a loop
  
  background ('light blue');
  
var num = 8;
  var sideLen = windowWidth
  
  var sidelen = windowWidth/num;
  for(var y = 0; y < windowHeight; y = y + sideLen){ //Loop to create rows in the y direction
     for(var x = 0; x < windowWidth; x = x + sideLen) { //loop to create a row of squares in the x direction
    image (gif, x, y, sideLen, sideLen);
    }
  }
}

function windowResizd (){
  resizeCanvas (windowWidth, windowHeight);
}