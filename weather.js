var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?appid=ffee9701904c3e36292a5984fc08ded7&q=hyderabad,india&units=imperial';
module.exports = function(callback){
  request({
    url: url,
    json :true
  },function(error,response,body){
    if(error){
      callback('Unable to fetch weather');
    }
    else{
      //console.log(JSON.stringify(body,null,4));
      callback("It's " + body.main.temp + ' farenheit in ' + body.name);
    }
  }); //first parameter is an object and the second is the function

} // can set it to anything variable function or object
