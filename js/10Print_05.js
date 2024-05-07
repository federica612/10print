function setup() {
  createCanvas(windowWidth, windowHeight);
}

let PAD=20
let circs=[]
function draw(){
  background(0);
  
  
  for(let i=0; i<5000;i++){
    let randX=random(PAD, windowWidth-PAD)
    let randY=random(PAD, windowHeight-PAD)
    let randS=random(10,100)
    
    let placeable=true
    for(let n=0; n<circs.lenght; n++){
    let c=circs[n]
    if(dist(randX, randY,c.x,c.y)<randS/2+c.s/2-1){
      placeable=false
    }
    }
    
    if(placeable){
      circs.push({x:randX, y:randY, s:randS})
      fill(random(255), random(100), random(255))
      ellipse(randX, randY, randS)
    }
  }
  noLoop()
}