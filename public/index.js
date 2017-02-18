
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var app = function(){
  var canvas = document.getElementById('main-canvas');
  var context = canvas.getContext('2d');

  var changeColor = function(){
    context.strokeStyle = this.value;
    context.fillStyle = this.value;
  }

  var colorPicker  = document.querySelector('#input-color');
  colorPicker.onchange = changeColor;
  
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
var dogeButton = document.getElementById('doge');
var img = document.createElement('img');
img.src = 'http://cultofthepartyparrot.com/parrots/witnessprotectionparrot.gif';

var drawDoge = function(event){
  console.log('img',img)
  context.drawImage(img, event.x, event.y, 90, 90);
}

dogeButton.onclick = function(){
  canvas.onclick = drawDoge;
}

//////////////////////////////////////////RANSOM CRCLS///////////////////////////////

var rcButton = document.getElementById('random_circles');

var drawCircle = function(x, y){
  context.beginPath();
  context.arc(x, y, 10 + ((Math.random() * 100)-(Math.random() * 100)) ,0, Math.PI*2, true);
  context.fill();
}

rcButton.onclick = function(){
  canvas.onclick = function(event){
    drawCircle(event.x, event.y);
  }
}

/////////////////////////////////////////RANDOM2/////////////////////////////////////

// var changeColor = function(){
//   context.strokeStyle = this.value;
//   context.fillStyle = this.value;
// }

// var colorPicker = document.querySelector('#input-color');
// colorPicker.onchange = changeColor;

var modArtButton = document.getElementById('mod_art');

var drawAnything = function(x,y){
  var xpar = x + Math.floor((Math.random() * 100));
  var ypar = y + Math.floor((Math.random() * 400) -11);
  context.beginPath();
  context.moveTo(Math.floor((Math.random() * 100))-1,ypar);
  context.lineTo(Math.floor((Math.random() * 100))-20, ypar-Math.floor((Math.random() * 11)+20));
  context.lineTo(xpar+20,Math.floor((Math.random() * 100)));
  context.closePath();
  context.stroke()
  context.fill();
}

modArtButton.onclick = function(){
  canvas.onmouseenter = function(event){
    drawAnything(event.x, event.y);
  }
}

///////////////////////////////////////RANDOM////////////////////////////////////////

// var changeColor = function(){
//   context.strokeStyle = this.value;
//   context.fillStyle = this.value;
// }

// var colorPicker = document.querySelector('#input-color');
// colorPicker.onchange = changeColor;

var ftsButton = document.getElementById('fts');

var fillIt = function(x,y){
  var xpar = x;
  var ypar = y;
  context.ellipse(xpar, ypar, xpar-=Math.floor((Math.random() * 100) + 1)
, ypar+=Math.floor((Math.random() * 40) + 1)
, 45 * Math.PI/180, 0, 2 * Math.PI);
  context.stroke();
  context.fill();
}

ftsButton.onclick = function(){
  canvas.onclick = function(event){
    fillIt(event.x, event.y);
  }
}


/////////////////////////////////////SQUARE/////////////////////////////////////////

// var changeColor = function(){
//   context.strokeStyle = this.value;
//   context.fillStyle = this.value;
// }

// var colorPicker  = document.querySelector('#input-color');
// colorPicker.onchange = changeColor;

var ntssButton = document.getElementById('random_squares');

var drawSquare = function(x, y){
  var xpar = x;
  var ypar = y;
  context.strokeRect(xpar, ypar, xpar + 3, ypar + 5);
  context.fill();
  context.stroke();
}

ntssButton.onclick = function(){
  canvas.onmousedown = function(event){
    drawSquare(event.x, event.y);
  }
}

////////////////////////////////////TRIANGLE////////////////////////////////////////


// var changeColor = function(){
//     context.strokeStyle = this.value;
//     context.fillStyle = this.value;
//   }

// var colorPicker  = document.querySelector('#input-color');
// colorPicker.onchange = changeColor;

var triangleButton = document.getElementById('triangles');

var drawTriangle = function(x, y){
  var xpar = x;
  var ypar = y;
  context.beginPath();
  context.moveTo(xpar,ypar);
  context.lineTo(xpar+10,ypar+50);
  context.lineTo(xpar+60,ypar+20);
  context.closePath();
  context.stroke();
  context.fill();
}

triangleButton.onclick = function(){
  canvas.onmousemove = function(event){
    drawTriangle(event.x, event.y);
  }
}

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