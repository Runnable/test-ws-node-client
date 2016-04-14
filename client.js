var http = require("http");
var Primus = require("primus");

var primus = Primus.connect("http://test-ws-server-staging-runnable.runnableapp.com:80")
primus.on("open", function() {
  console.log("Connected!!")
})
primus.on("data", function(data) {
  console.log('data', data, new Date().getTime())
})
