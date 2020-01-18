var milk = 0; //this is equivalent to myState


function setup() {
  // put setup code here
  createCanvas (1500, 800);
}

function draw() {
  // put drawing code here
  switch (milk) {

    case 0: //splash screen
    background ('black');
    fill ('white');
    textSize (75);
    text ('MILK', 610, 100);
    textSize (50);
    text ('-click to start-', 550, 250);
    break;


    case 1: //instructions
    break;

    case 2: //game state
    break;

    case 3: // win state
    break;

    case 4: //lose state
    break;
  }
}
