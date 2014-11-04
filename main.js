var greeting = function(message){
  var output = document.querySelector("#answer");
  output.value = message;
  };

var helloWorld = function(event){
  var inputA = document.querySelector("#input-a");
  var inputB = document.querySelector("#input-b");


var a = inputA.value;
var b = inputB.value;

var answer = a + b;


  console.log("helloWorld: start");
  greeting(answer);
  console.log("helloWorld: end");
};

var boot = function(event){
  console.log("boot: start");
  var button = document.querySelector("button");
  button.addEventListener(" click", helloWorld);
  button.addEventListener(" dblclick", helloWorld);
  console.log("boot: end");
};

window.addEventListener("load", boot);
