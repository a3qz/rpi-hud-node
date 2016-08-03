// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var events = [];
var food = [];
var googCal = require('../calendar/listEvents');

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clk').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
startTime();

function writeBlock(id, title, description, date ){
  document.getElementById(id).innerHTML +=
  `<div id='${id}'> <h1>${title}</h1><body id='${id}'><p>${description}</p><p>${date}</p></body></div><br />&nbsp <br/>`;
}
/*
document.getElementById('divA').innerHTML =
"<div class='well' id='food'> <h1>Hello</h1><p>World</p></div>";
document.getElementById('divA').innerHTML +=
"<div class='well' id='food'> <h1>Hello</h1><p>World</p></div>";
setTimeout(function(){
  document.getElementById('divA').innerHTML +=
  "<div class='well' id='food'> <h1>Hello</h1><p>World</p></div>";
}, 5000);
document.getElementById('divB').innerHTML =
"<div class='well' id='event'> <h1>Hello</h1><p>World</p></div>";
*/

googCal.listEvents().then(function(element){
  events = element;
    //element.forEach(function(eve){
    //    writeBlock("event", eve.summary, eve.description, eve.start.dateTime);
    //});
});
//writeBlock("food", "Hello", "world", "1234")
//writeBlock("event", "Hello", "world", "1234")
events.forEach(function(eve){
    writeBlock("event", eve.summary, eve.description, eve.start.dateTime);
})
