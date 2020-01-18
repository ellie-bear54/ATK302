var weather;
var temp = 0;
var weatherID = 0;
var weatherState = 0;
var x = 0;




function setup() {

createCanvas (500, 500);

  // put setup code here
  var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61701,us&units=imperial&';
  var myIDString = 'appid=b669277d429635fd5c34c87a09fcb25c'; // Take out the x’s and ADD YOUR ID!!!
  loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.

}

function gotData(data) {
  weather = data;
  console.log(data); // for debugging purposes, print out the JSON data when we get it.
}


function draw() {
  // put drawing code here
  switch (weatherState) {
    case 0:
      if (weather) {
          weatherState = 1;
      }
      break;

    case 1:
    background(200) ;
    fill('black');
    text("we have weather in " + weather.name, 20, 20) ;
    text("temperature = " + weather.main.temp, 20, 40);
    // text("wind speed = " + weather.wind.speed, 20, 60);
    // text("humidity = " + weather.main.humidity, 20, 80);

//cloud
// fill("white");
// noStroke();
//     ellipse(x, 300, 200, 100);
//     x = x + windspeed ;
//     if (x > width) x = 0;

//box
fill('red');
var mappedTemp = 0;
mappedTemp = map(temp, -10, 100, 0, height);
rect(width-30, height-10, 20, mappedTemp);
// parse the weather object and put some text for some at least 3 different weather data!
      break;

  }
}
