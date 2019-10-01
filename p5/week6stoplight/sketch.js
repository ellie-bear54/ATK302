//case 0 = green light on
//case 1 = yellow light on
//case 2= red light on
var turtle;

function setup() {
  createCanvas(1000, 1000);
rectMode(CENTER);
ellipseMode(CENTER);
  // put setup code here
}

function draw() {
  // put drawing code here
//yellow rectangle
//red ellipse
//yellow ellipse
//green ellipse

fill("yellow") ;
rect(width/2, height/2, 150, 500) ;

fill("green") ;
ellipse(width/2, height/2, 150, 150) ;

fill("gray");
ellipse(width/2, height/2 - 150, 150, 150) ;
ellipse(width/2, height/2 + 150, 150, 150) ;
switch (turtle) {

case 0:


break;

case 1:
break;

case 2:
break;
}


}
