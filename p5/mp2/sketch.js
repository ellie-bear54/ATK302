
//theme: sustaining mental health
var song1, song2, song3;
var myState = 0;
var myTimer = 0;


function preload() {
  song1 = loadSound();
  song2 = loadSound();
  song3 = loadSound();
}




function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  background()

  switch(myState) {

case 0:
//opening page
//song1.play();
//myState = 1;
break;

case 1:
myTimer++;
if (myTimer > 200) {
  myTimer = 0;
  myState = 2;
}

break;

case 2:
break;

case 3:
break;

case 4:
break;


  }
}


function mouseReleased() {
song1.pause;
song2.pause;
song3.pause;
}

}
