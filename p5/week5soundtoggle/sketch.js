var bucky;

function preload() {
  bucky = loadSound('assets/wintersoldiertheme.mp3');
}




function setup() {
  // put setup code here

}

function draw() {
  // put drawing code here

}

function mouseReleased() {


  if (bucky.isPlaying()) {
    bucky.pause();
  } else {
    bucky.play();
  }
}
//change song but code is/should be correct
