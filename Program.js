
let circleY = [];

function setup() {
  createCanvas(300, 300);
  for (let i = 0; i < 25; i++) {
    circleY[i] = random(height);  
  }   
} 

function draw() {
  background(50);
  for (let i = 0; i < circleY.length; i++) {
    let circleX = width * i / circleY.length;
    circle(circleX, circleY[i], 25);
    circleY[i]++;
    if (circleY[i] > height) {
      circleY[i] = 0;    
    }  
  }   
}
