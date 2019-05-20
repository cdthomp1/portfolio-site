const request = require('request');

var apiKey = "534bcbe72b02aef5fe56b07267f4c41c";
var city = "tucson"; // My test case was "London"
var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

request(url, function(err, resonse, body){
    if (err) {console.log(err)}
    else { console.log(body)}
})
