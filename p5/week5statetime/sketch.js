var myTimer = 0 ;
var myState = 0 ;
var myBColor ;

function setup() {
  // put setup code here
createCanvas(800, 800);
myBColor = color(random(255), random(255), random(255));
}

function draw() {
  // put drawing code here
  switch (myState) {
    case 0:
    background(myBColor);
    textSize(100);
    text("Steve Rogers", 200, 200);

    myTimer++ ;
    if (myTimer >= 200) {
      myState = 1;
      myTimer = 0;
      myBColor = color(random(255), random(255), random(255));
    }
    break;

    case 1:
    background(myBColor);
      textSize(100);
    text("Bucky Barnes", 200, 200);

    myTimer++ ;
    if (myTimer >= 200) {
      myState = 2;
      myTimer = 0;
      myBColor = color(random(255), random(255), random(255));
    }
    break;

    case 2:
    background(myBColor);
      textSize(100);
    text("Tony Stark", 200, 200);

    myTimer++ ;
    if (myTimer >= 200) {
      myState = 0;
      myTimer = 0;
      myBColor = color(random(255), random(255), random(255));
    }
    break;
  }
}
