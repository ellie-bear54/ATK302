var direction = 0;
var mariah;
var canada;
var russian
var california;
var despacito;
var vocaloid;
var bluegrass;
var hindi;
var up;
var down;
var comicsans;

function preload() {
  mariah = loadImage('assets/AIWFCIY.jpg');
  canada = loadImage('assets/Can.jpg');
  russian = loadImage('assets/CDB.jpg');
  california = loadImage('assets/CG.jpg');
  despacito = loadImage('assets/D.jpg');
  vocaloid = loadImage('assets/IP.jpg');
  bluegrass = loadImage('assets/TLO.jpg');
  hindi = loadImage('assets/TTT.jpg');
  up = loadImage('assets/OTR.jpg');
  down = loadImage('assets/KAP.jpg');


}

function setup() {
  // put setup code here
  createCanvas(1000, 800);
  comicsans = loadFont('assets/NotoSansJP-Regular.otf');
}

function draw() {
  // put drawing code here
  background('green');
  textFont(comicsans, 30);
  fill(250, 237, 39);

  switch (direction) {
    case 0:

      text("Direction: North \nAll I Want For Christmas Is You by Mariah Carey", 100, 500);
      image(mariah, 0, 0, 600, 450);
      break;

    case 1:
      textFont(comicsans, 30);
      text("Direction: South \nThe Lucky One by Alison Krauss and Union Station", 100, 500);
      image(bluegrass, 0, 0, 450, 450);
      break;

    case 2:
      textFont(comicsans, 30);
      text("Direction: East \nTunak Tunak Tun by Daler Mehndi", 100, 500);
      image(hindi, 0, 0, 650, 450);
      break;

    case 3:
      textFont(comicsans, 30);
      text("Direction: West \nCalifornia Girls by Katy Perry", 100, 500);
      image(california, 0, 0, 650, 450);
      break;

    case 4:
      textFont(comicsans, 30);
      text("Direction: Northeast \nChum Drum Bedrum by Vitas", 100, 500);
      image(russian, 0, 0, 450, 450);
      break;

    case 5:
      textFont(comicsans, 30);
      text("Direction: Northwest \nFrench Canadian National Anthem", 100, 500);
      image(canada, 0, 0, 450, 450);
      break;

    case 6:
      textFont(comicsans, 30);
      text("Direction: Southeast \nIevan Polkka sung by Len Kagamine and Many Other Vocaloids", 100, 500);
      image(vocaloid, 0, 0, 450, 450);
      break;

    case 7:
      textFont(comicsans, 30);
      text("Direction: Southwest \nDespacito by Luis Fonsi, Daddy Yankee, and Justin Bieber", 100, 500);
      image(despacito, 0, 0, 650, 450);
      break;

    case 8:
      textFont(comicsans, 30);
      text("Direction: Straight Up \nOld Town Road sung by Kidz Bop", 100, 500);
      image(up, 0, 0, 450, 450);
      break;

    case 9:
      textFont(comicsans, 30);
      text("Direction: Straight Down \nKnives and Pens by Black Veil Brides", 100, 500);
      image(down, 0, 0, 450, 450);
      break;
  }

}



function mouseReleased() {
  direction++;

  if (direction > 9) {
    direction = 0;
  }
}
