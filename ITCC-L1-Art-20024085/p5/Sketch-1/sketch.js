let dots = [];
let x, y;


function setup() {

  createCanvas(500, 500); // canvas will fit the window size
  background(random(0, 255), random(0, 255), random(0, 255)); // random background colour generated
  stroke(random(0, 255), random(0, 255), random(0, 255)); // random outline colour generated

  for (let i = 1; i < 100; i++) { //for loop will go while less 300 
    dots.push(new Art(random(width), random(height), random(10, 30))); //random triagle generated using Art class
    fill(random(0, 255), random(0, 255), random(0, 255)); //random triangle colour
  }

}


function draw() {

  // display all the objects generated
  for (let i = 0; i < dots.length; i++) {
    dots[i].display();
  }
}

// Art class called by the for loop
class Art {

  constructor(_x, _y, _unit) { // centre point co-ordinates
    this.x = _x;
    this.y = _y;
    this.unit = _unit;

  }

  display() {
    triangle(this.x, this.y - this.unit, this.x - this.unit, this.y + this.unit, this.x + this.unit, this.y + this.unit,);
    // drawing triangle using centre point - + unit
  }

}

