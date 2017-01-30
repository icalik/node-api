var log = {
    "a" : 5,
    "b" : 1,
    "c" : 7

}

console.log("Server is starting..");

var express = require('express'); //This is import statement..

var app = express();

var server = app.listen(3000, listening);

function listening() {
  console.log("Listening..");
}

////////////////////////////
app.use(express.static('website'));
///////////////////////////
app.get('/add/:varible/:value?', addVar);
app.get('/all',sendAll);
app.get('/search/:varible', searchVarible);
///////////////////////////

function searchVarible(req,res) {
  var data = req.params;
  var varible = data.varible;
  var reply;
  if (log[varible]) {
    reply = {
      msg : "Varible founded!",
      varible : varible,
      value : log[varible]
    }
  }
  else {
    reply = {
      msg : "Varible not found!",
      varible : varible
    }
  }
  res.send(reply);
}

function addVar(req, res) {
  var data = req.params;
  var varible = data.varible;
  var value = Number(data.value);
  var reply;
  if (!value) {
    reply = {
      msg : "Value is required!"
    }
  }
  else {
    log[varible] = value;
    reply = {
      msg : "Varible is added!"
    }
  }
  res.send(reply);
}

function sendAll(req, res) {
  res.send(log);
}
