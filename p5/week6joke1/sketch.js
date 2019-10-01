
var nom = 0;

function setup() {
  // put setup code here
  createCanvas(1000, 1000);
  background(214, 47, 206);
}

function draw() {
  // put drawing code here
switch (nom) {

case 0:
background("orange");

text("Even people who are good for nothing have the capacity to bring a smile to your face", 100, 100);

break;

case 1:
background("gray");

text("For instance, when you push them down the stairs", 100, 100);

break;

}
}


function mouseReleased() {
nom = nom + 1;
if (nom > 1) {
nom = 0;
}
}
