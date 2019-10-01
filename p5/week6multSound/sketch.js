var ari;
var sos;
var taron;
var bunny = 0;

function preload() {
  ari = loadSound('assets/tears.mp3');
  sos = loadSound('assets/easier.mp3');
  taron = loadSound('assets/dancer.mp3');

  ari.loop();
  ari.stop();
  sos.loop();
  sos.stop();
  taron.loop();
  taron.stop();
}

function setup() {
  createCanvas(2000, 300);
}

function draw() {
  background("red");
  switch (bunny) {

    case 0:
      ari.play();
      bunny = 1;
      break;

    case 1:

      textSize(30);
      text('No Tears Left To Cry by Ariana Grande', 100, 100);
      break;

    case 2:

      sos.play();
      bunny = 3;
      break;

    case 3:
background('black');
      fill("white");
      textSize(30);
      text('Easier by 5 Seconds of Summer', 100, 100);
      break;

    case 4:

      taron.play();
      bunny = 5;
      break;

    case 5:
    background('purple');
      fill('white');
      textSize(30);
      text('Tiny Dancer sung by Taron Egerton', 100, 100);
      break;
  }
}

function mouseReleased() {
  bunny++;

  ari.pause();
  sos.pause();
  taron.pause();

  if (bunny > 5) {
    bunny = 0;
  }
}
