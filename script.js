
/*
COMP 125 Lab 11 - Adding to an Array with mouse clicks
Step 1 - add a line of code to function mousePressed() that will add a new object to the array when the mouse is pressed. The first part (creating a new object where the mouse is pressed) is done for you. Just add the line that appends it to the array.
Step 2 - add comments explaining each line of code in this sketch.
*/

var dots = new Array(1); // Declare an array called "dots" with initial size of 1 element

function setup() {
  createCanvas(500, 300); // Create a canvas of size 500x300 pixels
  dots[0] = new Dot(width/2, height/2); // Create a new Dot object at the center of the canvas and assign it to the first element of the dots array
}

function draw() {
  background(200); // Set the background color of the canvas to light gray
  
  // Loop through each element in the dots array
  for(let i = 0; i < dots.length; i++){
    dots[i].move(); // Move each dot
    dots[i].display(); // Display each dot
  }
  
  // Display the length of the dots array on the canvas
  textSize(24); // Set the text size to 24
  fill(100, 0, 200); // Set the fill color to a shade of purple
  text("'dots' array length: " + dots.length, 100, 100); // Display the length of the dots array at position (100, 100)
}

function mousePressed(){
  let obj = new Dot(mouseX, mouseY); // Create a new Dot object at the mouse position
  
  // Add the newly created Dot object to the dots array using the .push() method
  dots.push(obj); // Append the new Dot object to the end of the dots array
}

function Dot(X, Y){
  // Define the properties of the Dot object
  this.x = X; // X-coordinate
  this.y = Y; // Y-coordinate
  this.w = random(20, 50); // Width of the dot
  this.sx = random(-5, 5); // Horizontal speed
  this.sy = random(-5, 5); // Vertical speed
  this.r = random(0, 255); // Red component of color
  this.g = random(0, 255); // Green component of color
  this.b = random(0, 255); // Blue component of color
  
  // Method to display the dot on the canvas
  this.display = function(){
    fill(this.r, this.g, this.b); // Set the fill color
    ellipse(this.x, this.y, this.w, this.w); // Draw the dot
  }
  
  // Method to move the dot
  this.move = function(){
    this.x += this.sx; // Update the x-coordinate
    this.y += this.sy; // Update the y-coordinate
    
    // Check if the dot reaches the canvas edges and make it bounce
    if (this.x < 0 || this.x > width){
      this.sx *= -1; // Reverse horizontal speed
    }
    if (this.y < 0 || this.y > height){
      this.sy *= -1; // Reverse vertical speed
    }
  }
}

