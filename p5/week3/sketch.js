 var score = 0 ;

 function setup() {
 //put setup code here
  createCanvas(windowWidth, windowHeight) ;
 }

 function draw() {
   ellipse(width/2, height/2, 100, 100);
   rect(mouseX, mouseY, 400, 200);
   //background(100);
   text(score, 100, 100);
   textSize(50);
//fill(random(255), 0, 0);
  text('Lizzy Parvin', width/2, height/2);
  fill(0);
  rect(60, 60, 300, 400);

}

 function mouseReleased(){
   //background (255);
   //background(random(255), random(255), random(255));
   score++ ;
 }
