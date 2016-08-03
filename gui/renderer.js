// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var events = [];
var food = [];
var googCal = require('../calendar/listEvents');

function writer(){
    document.getElementById('event-container').innerHTML = "";
    events.forEach(function(eve){
        writeBlock("event", eve.summary, eve.description, eve.start.dateTime);
    })
}

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
    var w = setTimeout(writer, 5000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
startTime();
fetchEvents();
writer();

function writeBlock(id, title, description, date ){
  document.getElementById(id + "-container").innerHTML +=
  `
    <div id='${id}' class="panel panel-default">
      <div class="panel-heading">${title}</div>
        <div class="panel-body">
           ${description} 
            <br />
           ${date}
        </div>
    </div>
  ` 
  }
//writeBlock("food", "Hello", "world", "1234")
//writeBlock("event", "Hello", "world", "1234")
function fetchEvents(){
    googCal.listEvents().then(function(element){
      events = [];
      events = element;
    });
    var e = setTimeout(fetchEvents, 30000)
}
