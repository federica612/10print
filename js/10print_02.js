let x=0
let y=0
let spacing=10;



function setup() {
  createCanvas(windowWidth, windowHeight);
  background (0);
}

function draw() {
  stroke (255);
  if (random(1) < 0.9){
  line (x, y, x + spacing, y + spacing);
  } else{
  line (x, y + spacing, x + spacing, y);
}
  x= x + spacing
  if (x>width){
    x=0;
    y=y+spacing;
}
}