
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var app = function(){
  var canvas = document.getElementById('main-canvas');
  var context = canvas.getContext('2d');
  // // context.fillStyle = 'PowderBlue';
  // context.fillRect(10,10,50,50);
  // context.fillRect(10, 100, 50, 50);

  // // context.strokeStyle = "dodgerBlue";
  // context.beginPath();
  // context.moveTo(100, 100); //XY coordinates
  // context.lineTo(100, 200);
  // context.stroke();

  // context.beginPath();
  // context.moveTo(200,200);
  // context.lineTo(200,300);
  // context.lineTo(100,300);
  // context.closePath();
  // context.stroke();

  // context.beginPath();
  // context.arc(200,75,50,0,9);
  // context.stroke();


///////////////////////////////////////DOGE////////////////////////////////////////////
  // var img = document.createElement('img');
  // img.src = 'http://cultofthepartyparrot.com/parrots/witnessprotectionparrot.gif';

  // var drawDoge = function(event){
  //   console.log('img',img)
  //   context.drawImage(img, event.x, event.y, 90, 90);
  // }

  // canvas.onclick = drawDoge
/////////////////////////////////////////RANDOM2/////////////////////////////////////


var changeColor = function(){
  context.strokeStyle = this.value;
  context.fillStyle = this.value;
}

var colorPicker = document.querySelector('#input-color');
colorPicker.onchange = changeColor;
var drawAnything = function(x,y){
  var xpar = x;
  var ypar = y;
  context.ellipse(xpar, ypar, xpar-=Math.floor((Math.random() * 100) + 1)
, ypar+=Math.floor((Math.random() * 40) + 1)
, 45 * Math.PI/180, 0, 2 * Math.PI);
  context.stroke();
  context.fill();
}

canvas.onclick = function(event){
  drawAnything(event.x, event.y);
}

///////////////////////////////////////RANDOM////////////////////////////////////////


// var changeColor = function(){
//   context.strokeStyle = this.value;
//   context.fillStyle = this.value;
// }

// var colorPicker = document.querySelector('#input-color');
// colorPicker.onchange = changeColor;
// var drawAnything = function(x,y){
//   var xpar = x;
//   var ypar = y;
//   context.ellipse(xpar, ypar, xpar-=Math.floor((Math.random() * 100) + 1)
// , ypar+=Math.floor((Math.random() * 40) + 1)
// , 45 * Math.PI/180, 0, 2 * Math.PI);
//   context.stroke();
//   context.fill();
// }

// canvas.onclick = function(event){
//   drawAnything(event.x, event.y);
// }

/////////////////////////////////////SQUARE/////////////////////////////////////////

// var changeColor = function(){
//   context.strokeStyle = this.value;
//   context.fillStyle = this.value;
// }

// var colorPicker  = document.querySelector('#input-color');
// colorPicker.onchange = changeColor;

// var drawSquare = function(x, y){
//   var xpar = x;
//   var ypar = y;
//   context.strokeRect(xpar, ypar, xpar + 3, ypar + 5);
//   context.fill();
//   context.stroke();
  
// }

// canvas.onclick = function(event){
//   drawSquare(event.x, event.y);
// }

////////////////////////////////////TRIANGLE////////////////////////////////////////


// var changeColor = function(){
//     context.strokeStyle = this.value;
//     context.fillStyle = this.value;
//   }

// var colorPicker  = document.querySelector('#input-color');
// colorPicker.onchange = changeColor;

// var drawTriangle = function(x, y){
//   var xpar = x;
//   var ypar = y;
//   context.beginPath();
//   context.moveTo(xpar,ypar);
//   context.lineTo(xpar+10,ypar+50);
//   context.lineTo(xpar+60,ypar+20);
//   context.closePath();
//   context.stroke();
//   context.fill();
// }

// canvas.onclick = function(event){
//   drawTriangle(event.x, event.y);
// }
///////////////////////////////////////CIRCLE///////////////////////////////////////
  // var changeColor = function(){
  //   context.strokeStyle = this.value;
  //   context.fillStyle = this.value;
  // }

  // var colorPicker  = document.querySelector('#input-color');
  // colorPicker.onchange = changeColor;


  // var drawCircle = function(x, y){
  //   context.beginPath();
  //   context.arc(x, y, 50,0, Math.PI*2, true);
  //   context.fill();
  // }

  // canvas.onclick = function(event){
  //   console.log(event);
  //   drawCircle(event.x, event.y);
  // }
//////////////////////////////////////////////////////////////////////////////////////
}

window.onload = app;