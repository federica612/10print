function setup() {
    createCanvas(windowWidth, windowHeight);
    fill(0);
    strokeWeight(3);
    rectMode(CENTER);
    let space = 50;
    for (x=0; x<width+50;x+=space){
      for(y=0; y<height+50;y+=space){
  line(x,y,x+space, y);
  line(x,y,x,y+space);
  //square(x,y,10);
  //square(x+space/2, y+space/2, 10)
      }
    }
  }