var myCar1 ; // name it
var myCar2 ;
var myCar3 ;
var myCar4 ;



function setup() {
  // put setup code here
    createCanvas(800, 800) ;
    myCar1 = new Car() ; // spawn 1 car
    myCar2 = new Car() ;
    myCar3 = new Car() ;
    myCar4 = new Car() ;
}




function draw() {
  // put drawing code here
background (225);

myCar1.display() ;
myCar1.drive() ;

myCar2.display() ;
myCar2.drive() ;

myCar3.display() ;
myCar3.drive() ;

myCar4.display() ;
myCar4.drive() ;
}


function Car() {
// attributes (description)
this.x = random(width) ;
this.y = random(height);
this.r = random(255);
this.g = random(255);
this.b = random(255);
this.vel = random(5, 10);

// methods (what it does)
this.display = function() {
  fill(this.r, this.g, this.b);
  rect(this.x, this.y, 100, 50) ;

}
this.drive = function() {
  this.x = this.x + 5;
  if (this.x > width) {
    this.x = 0;
  }
}

}
