function setup() {
  //runs one time
  createCanvas(windowWidth,windowHeight);
    background('lightpink');
  fill ('lightblue');
}

function draw() {
  //runs in a loop
  
var num = 50;
  var sideLen = windowWidth/num;
  
  for(var y = 0; y < windowHeight; y = y + sideLen){ //Loop to create rows in the y direction
     for(var x = 0; x < windowWidth; x = x + sideLen) { //loop to create a row of squares in the x direction
    
   quad (x, y, x + sideLen, y, x + sideLen, y + sideLen, x, y + sideLen);
    
    }
  }
}

function windowResized (){
  resizeCanvas (windowWidth, windowHeight)
}