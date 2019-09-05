let value = (207, 197, 205);

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  // put drawing code here

  //hair2
  fill(244, 242, 201);
  rect(560, 130, 160, 150, 20);

  // head
  fill(255, 219, 172);
  ellipse(640, 200, 100, 100);

  // neck
  fill(255, 219, 172);
  rect(630, 250, 20, 5);

  // body
  fill(value);
  rect(575, 255, 130, 300, 20);

  // larm
  fill(255, 219, 172);
  rect(535, 255, 40, 160, 20);

  //rarm
  fill(255, 219, 172);
  rect(705, 255, 40, 160, 20);


  //lleg
  fill(255, 219, 172);
  rect(600, 555, 35, 140);


  //rleg
  fill(255, 219, 172);
  rect(650, 555, 35, 140);

  //leye
  fill(96, 115, 153);
ellipse(620, 200, 10, 10);

//reye
fill(96, 115, 153);
    ellipse(650, 200, 10, 10);

  //hair1
fill(244, 242, 201);
  rect(560, 125, 160, 60, 20);

}

function mousePressed() {
if (value === (207, 197, 205)) {
  value = 0;
} else {
  value = (207, 197, 205);
}
}
