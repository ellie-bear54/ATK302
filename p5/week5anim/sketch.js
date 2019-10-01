var x = 800;


function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  background(100);
//  rect(x, 10, 10, 10);
text("NAP", x, height/2);
x -= 2;
if (x < 0) {
  x = 800 ;
}

}
