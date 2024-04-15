
/*
COMP 125 Lab 11 - Adding to an Array with mouse clicks
Step 1 - add a line of code to function mousePressed() that will add a new object to the array when the mouse is pressed. The first part (creating a new object where the mouse is pressed) is done for you. Just add the line that appends it to the array.
Step 2 - add comments explaining each line of code in this sketch.
*/
var dots = new Array(1);

function setup() {
  createCanvas(500, 300); 
  dots[0] = new Dot(width/2, height/2);
}

function draw() {
  background(200);
  
  for(let i = 0; i < dots.length; i++){
    dots[i].move(); 
    dots[i].display(); 
  }
  textSize(24);
  fill(100, 0, 200);
  text("'dots' array length: " + dots.length, 100, 100);

}

function mousePressed(){
  let obj = new Dot(mouseX, mouseY);
  
  /* add a line of code that adds "obj" to the "dots" array. Use the .push() method of the dots array object to append the new "obj" to the end of an existing array. Check the Array.push() documentation first to make sure you are using it correctly.
  */

}


function Dot(X, Y){
  
  this.x = X;
  this.y = Y;
  this.w = random (20, 50);
  this.sx = random(-5, 5);
  this.sy = random(-5, 5);
  this.r = random(0, 255);
  this.g = random(0, 255);
  this.b = random(0, 255);
  
  this.display = function(){
    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, this.w, this.w);
  }
  
  this.move = function(){
    this.x += this.sx;
    this.y += this.sy;
    
    if (this.x < 0 || this.x > width){
        this.sx *= -1;
    }
    if (this.y < 0 || this.y > height){
        this.sy *= -1;
    }
  }
    
}
