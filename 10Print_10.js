function setup() {
    createCanvas(800, 800);
    noLoop();
    angleMode(DEGREES); // Use degrees for easier angle calculation
  }
  
  function draw() {
    background(0, 51, 153); // Dark blue background
  
    let x = width / 2;
    let y = height / 2;
    let side = 1;
    let prevSide = 0;
    let angle = 0;
  
    for (let i = 0; i < 15; i++) {
      let newSide = side + prevSide;
      prevSide = side;
      side = newSide;
  
      // Draw the rectangle
      fill(getColor(i));
      stroke(0);
      strokeWeight(4);
      rectMode(CENTER);
      rect(x, y, side * 20, side * 20);
  
      // Draw the arc
      noFill();
      arc(x, y, side * 40, side * 40, angle, angle + 90);
  
      // Calculate the new position and angle for the next square
      let nextX = x + cos(angle + 45) * side * 20;
      let nextY = y + sin(angle + 45) * side * 20;
  
      x = nextX;
      y = nextY;
      angle += 90;
    }
  }
  
  function getColor(index) {
    // Alternate colors between yellow, red, and blue
    if (index % 3 == 0) return color(255, 255, 0); // Yellow
    if (index % 3 == 1) return color(255, 0, 0); // Red
    return color(0, 0, 255); // Blue
  }