let img;
let cnv

function preload() {
  img = loadImage('images/spudme.jpg');
}

function setup() {
  cnv = createCanvas(img.width, img.height);

  let newCanvasX = (windowWidth - img.width)/2;
  let newCanvasY = (windowHeight - img.height)/2;

  cnv.position(newCanvasX, newCanvasY);

  for(let col = 0; col< img.width; col+=8){
    for(let row = 0; row< img.height; row+=8){
      let c =img.get(col, row);
            
      stroke(color(c));
      strokeWeight(8);
      point(col,row);
      
      //fill(color(c));
      //rect(col,row,20,20);
    }
  }
  
}


