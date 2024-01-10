function setup() {
  createCanvas(720,720);
    background('lightpink');
  strokeWeight(8);
  fill ('lightblue');
}

function draw() {
  
  translate(60,60); //creates a new origin point
  
  for(var y = 0; y < 600; y = y + 300){ //Loop to create rows in the y direction
     for(var x = 0; x < 600; x = x + 300) { //loop to create a row of squares in the x direction
    
   quad (
    x,y,
    x + 300,y,
    x + 300,y + 300,
    x,y + 300
  );
    
  }
    
    
    
  }
   
  
  
}