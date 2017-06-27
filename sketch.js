var canvas;
var h1;

var bgcolor;

var x = 100;
var y = 600;

var button;


function setup() {
  canvas = createCanvas(720,480);
  bgcolor = color(200);
  h1 = createElement('h1',"Wating for you.");
  button = createButton("Press me!");
  button.mousePressed(changeColor);
}
function mousePressed(){
  h1.html("You better move!");
  //createP("Right on the booty!");
}
function draw() {
  background(bgcolor);
  fill(250,0,0);
  rect(x,200,200,200);
  //h1.position(x,y);
  //x = x + random(-5,5);
}

function changeColor(){
  bgcolor = color(random(255),random(255),random(255));
}