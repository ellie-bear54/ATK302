var timer = 200;
var turtle = 0;

function setup() {
  createCanvas(1000, 1000);
  rectMode(CENTER);
  ellipseMode(CENTER);
  // put setup code here
}

function draw() {

  fill("yellow");
  rect(width / 2, height / 2, 150, 500);


  switch (turtle) {
    case 0:
      fill("grey");
      ellipse(width / 2, height / 2 - 150, 150, 150);
      ellipse(width / 2, height / 2, 150, 150);

  

      fill("green");
      ellipse(width / 2, height / 2 + 150, 150, 150);



      break;

    case 1:
      fill("grey");
      ellipse(width / 2, height / 2 + 150, 150, 150);
      ellipse(width / 2, height / 2 - 150, 150, 150);

      fill("yellow");

      ellipse(width / 2, height / 2, 150, 150);

      break;

    case 2:
      fill("red");
      ellipse(width / 2, height / 2 - 150, 150, 150);



      fill("grey");
      ellipse(width / 2, height / 2 + 150, 150, 150);
      ellipse(width / 2, height / 2, 150, 150);

      break;
  }

  timer--;
  if (timer < 0) {
    timer = 200;
    turtle = turtle + 1;
  }



}
