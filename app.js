
var weather = require('./weather.js'); // ./ gives the current directory
var location = require('./location.js');
weather(function(currentWeather) {
  console.log(currentWeather);
});


//console.log("After request");

location(function(location){
  if(!location){
    console.log("I'm unable to fetch the location");
    return;
  }
  
  console.log('city : ' + location.city);
  console.log('long/lat : ' + location.loc);
});
