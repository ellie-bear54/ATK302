var namesArray = [];
var taco, noodle, yay, boo;
var x = 0;

function setup() {

  taco = loadImage('assets/taco.jpg');
  noodle = loadImage('assets/noodle.jpg');
  yay = loadImage('assets/both.png');
  boo = loadImage('assets/boo.png');




  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1xzxLgMkzfmiR3projxaWZ3nJwUCuZSU95sBu1rD9mGw'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(1000, 800);
  textAlign(CENTER);
  //  ellipseMode(CENTER);
  //rectMode(CENTER);
  imageMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called namesArray
  for (let i = 0; i < data.length; i++) {
    namesArray.push(new Circle(data[i].Name, data[i].Answer));
  }

}


function draw() {
  background('red');

  // // iterate through the namesArray and display the objects!
  for (let i = 0; i < namesArray.length; i++) {
    namesArray[i].display();
  }

}


// my circle class
function Circle(myName, myAnswer) {
  this.pos = createVector(random(width), random(height));
  this.name = myName;
  this.answer = myAnswer;



  this.display = function() {

    // put an ellipse here
    if (this.answer == "Tacos") {
      image(taco, x, this.pos.y, 100, 100);

    }

    if (this.answer == "Noodles") {
      image(noodle, x, this.pos.y, 100, 100);
    }

    if (this.answer == "Both") {
      image(yay, x, this.pos.y, 100, 100);
    }

    if (this.answer == "Neither") {
      image(boo, x, this.pos.y, 100, 100);
    }

    text(this.answer, x, this.pos.y);
    x = x+0.1;
    if (x > width){
      x = 0;
    }

  }

}
