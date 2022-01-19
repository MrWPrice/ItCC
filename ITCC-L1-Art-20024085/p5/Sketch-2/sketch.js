function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  stroke(255);

  //vertical lines drawn 
  for (let i = 1; i <= 30; i++) { //for loop will draw until the 30
    strokeWeight(i * 2); // line weight 1 then times 2 every time

    let lineX = i * 50; // line drawn every 50 px
    line(lineX, 0, lineX, height); //lines drawn at position 0 
  }

  //horizontal lines drawn for 30 iterations doubling in thickness
  for (let i = 1; i <= 100; i++) { //for loop will draw until the 30
    strokeWeight(i * 2); // line weight 1 then times 2 every time


    let lineY = i * 50; // line drawn every 50 px
    line(0, lineY, height, lineY); //lines drawn at position 0 
  }
}