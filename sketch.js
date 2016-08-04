function square(x, y, side){
rect(x, y, side, side);
}
  
function setup() {
  createCanvas(640, 480);
  fill(255, 0 , 102);
  ellipse(70, 100, 30, 30);
  ellipse(100, 100, 30, 30);
  ellipse(60, 73, 30, 30);
  ellipse(83, 55, 30, 30);
  ellipse(110, 71, 30, 30);
   fill(255, 255, 0);
  ellipse(85, 80, 25, 25); 
  stroke(0, 0, 0);
  line(85, 92, 85, 200);
fill (255, 255, 51);
  ellipse(200, 80, 55, 55);
  fill (0, 0, 0);
  square(190, 70, 5);
  fill (255, 51, 51);
  arc(180, 90, 10, 20, 50, PI+QUARTER_PI, TWO_PI);
  fill(204, 51, 255);
  triangle(200, 109, 160, 200, 240, 200);
  line(200, 200, 200, 250);
  line(200, 150, 100, 150);
}
function draw() {
  
}