
var callig ;
var x = 0;

function setup() {
  // put setup code here
  createCanvas (windowWidth, windowHeight) ;
  callig = loadFont('assets/Welcome.ttf') ;
}

function draw() {
  // put drawing code here
  background(100) ;
textFont(callig, 160) ;
fill('red') ;
text("Hello world", x, 100) ;
x = x + 20;
if (x > width) {
  x = 0;
}
}
