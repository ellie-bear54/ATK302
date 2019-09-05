function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 800); // size of canvas//

}

function draw(){
  background(22, 44, 162);
  noStroke(); //rim of color//

  // fill(22, 44, 162);
  // triangle(18, 18, 18, 360, 81, 360);
  //
  // fill(102);
  // rect(81, 81, 63, 63);
  //
  // fill(204);
  // quad(189, 18, 216, 18, 216, 360, 144, 360);
  //
  fill(255, 193, 0);
  ellipse(84, 82, 150, 150);
  //
  fill(162, 205, 72);
  triangle(70, 649, 219, 649, 144, 448);
  fill(162, 205, 72);
  triangle(70, 549, 219, 549, 144, 400);
  //
  // fill(255);
  // arc(479, 300, 280, 280, PI, TWO_PI);
fill ("white")
  text (mouseX + ',' + mouseY, 300, 300) ;

}


function mouseReleased() {
  console.log(mouseX + ',' + mouseY) ;
}
