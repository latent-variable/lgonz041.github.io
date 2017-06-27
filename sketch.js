var canvas;
var h1;

var bgcolor;

var x = 100;
var y = 600;

var button;

var el1;
var el2;
function setup() {
  canvas = createCanvas(720,480);
  bgcolor = color(200,0,0);
  h1 = createElement('h1',"Wait and see!");
  button = createButton("Press me more");
  button.mousePressed(changeColor);
}
function mousePressed(){
  h1.html("I love your yoyo!");
  //createP("Right!");
}
function draw() {
  background(200,0,0);
  fill(bgcolor);
  noStroke();
  triangle(240,200,400,450,550,200);
  rotate(-.1);
  el1 = ellipse(300,200,160,250);
  rotate(0);
  //rotate(.1);
  el2 = ellipse(450,200,160,245);
  
  
  rotate(0);
  // A design for a simple flower
  translate(100, 400);
  noStroke();
  for (var i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
  }
  
  //ellipse(x,y,w,[h])
  //rect(x,200,200,200);
  //h1.position(x,y);
  //x = x + random(-5,5);
}

function changeColor(){
  bgcolor = color(random(255),random(255),random(255));
}