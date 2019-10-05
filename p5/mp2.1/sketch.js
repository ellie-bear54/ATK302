var sleep, outside, eat, van;
var sustain = 0;

function preload() {
  eat = loadSound('assets/wiggles.mp3');

eat.loop();
eat.stop();



}

function setup() {
  // put setup code here
  createCanvas(5000, 4000);
  van = loadFont('assets/Vanilla_Twilight.otf');
}

function draw() {
  // put drawing code here
  switch (sustain) {



    case 0:
      background(61, 1, 88);
      fill('white');
      textFont(van, 30);
      text('Some Ways To Sustain Good Mental Health \n-click to begin-', 50, 50);
      break;

      case 1:
    eat.play();
        sustain = 2;
        break;

    case 2:
      background('black');
      fill('white');
      textFont(van, 36);
      text('1. Get plenty of sleep. Most college students require seven to nine hours, although it is not unheard of to require more.', 25, 50);
      break;


    case 3:
      background(0, 204, 255);
      fill('black');
      textFont(van, 36);
      text('2. Spend some time outside. Even as little as five minutes outside can improve your mental health. \nConsider eating your lunch or dinner outside to change your routine up and absorb some vitamin D.', 50, 50);
      break;

      case 4:
      background(253, 91, 120);
      fill('black');
      textFont(van, 36);
      text('3. Eat a piece of fruit. Chances are good that you are dehydrated. Fruit has a high water content and will help alleviate your dehydration.', 50, 50);
break;

case 5:
sustain = 0;

break;
}
  }


function mouseReleased() {
  sustain++;
if (sustain > 4) {
  eat.pause();
}


}
