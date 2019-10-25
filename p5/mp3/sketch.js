var start = 0;
var clock = 0;
var human;
var humans = [];
var vrothanoPos;
var vrothano;
var runFont;
var clap;



function setup() {

  createCanvas(1300, 800);
  clap = loadSound('assets/winning_sound.wav');
  human = loadImage('assets/forlizgame.png');
  // humans[0] = loadImage('assets/forlizgame.png');
  // humans[1] = loadImage('assets/forlizgame.png');

  vrothano = loadImage('assets/Crawler.png');

  //spawn humans!!!
  for (var i = 0; i < 5; i++) {
    humans.push(new Tenebris());
  }

  runFont = loadFont('assets/run_font/Run_Demo.otf');


  vrothanoPos = createVector(width / 2, height - 100);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);

}

function draw() {

  switch (start) {

    case 0: // splash screen
      background('black');
      fill(138, 28, 39);
      textFont(runFont, 50);
      text('Welcome To The Tenebris \n click to start', 200, 200);
      break;

    case 1: // the game state

      game();
      clock++;
      if (clock > 1500) {
        start = 4;
        clock = 0;
      }
      break;

    case 3: // the win state
      background('black');
      fill(138, 28, 39)
      textSize(runFont, 50);
      text('Yay!', 200, 200);

      break;

    case 2:
      clap.play();
      start = 3;
      break;


    case 4: // the lose state
      background('black');
      fill(138, 28, 39);
      textSize(runFont, 50);
      text('Boo', 200, 200);
      break;

  }

}

function mouseReleased() {
  switch (start) {
    case 0:
      start = 1;
      break;

    case 3:
      resetTheGame();
      start = 0;
      clap.pause();
      clap.loop();
      break;

    case 4:
      resetTheGame();
      start = 0;
      break;
  }

}
// tenebris class!!
function Tenebris() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 10), random(-5, 10));

  this.clock = 0;
  this.maxClock = random(10, 30); //use this for timer code


  // methods
  this.display = function() {
    //image(humans[this.humanNum], this.pos.x, this.pos.y, 100, 100);
    image(human, this.pos.x, this.pos.y, 100, 100);
    this.clock++;
    if (this.clock > 1500) {
      //this.humanNum = this.humanNum + 1;
      this.clock = 0;
    }



    // if (this.humanNum > humans.length - 1) {
    //   this.humanNum = 0;
    //
    //
    // }
  }
  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;



  }
}



function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) vrothanoPos.x = vrothanoPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) vrothanoPos.x = vrothanoPos.x + 5;
  if (keyIsDown(UP_ARROW)) vrothanoPos.y = vrothanoPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) vrothanoPos.y = vrothanoPos.y + 5;

}

function game() {
  background('red');
  for (var i = 0; i < humans.length; i++) {
    humans[i].display();
    humans[i].drive();
    if (humans[i].pos.dist(vrothanoPos) < 100) {
      humans.splice(i, 1);
    }
  }

  if (humans.length == 0) {
    start = 2;
  }
  // draw the frogS
  image(vrothano, vrothanoPos.x, vrothanoPos.y, 400, 400);
  checkForKeys();

}


function resetTheGame() {
  humans = [];
  for (var i = 0; i < 10; i++) {
    humans.push(new Tenebris());
  }
  clock = 0;

}
