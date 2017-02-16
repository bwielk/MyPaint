
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
  var img = document.createElement('img');
  img.src = 'http://emojis.slackmojis.com/emojis/images/1457563042/312/doge.png';

  var drawDoge = function(event){
    console.log('img',img)
    context.drawImage(img, event.x, event.y, 90, 90);
  }

  canvas.onclick = drawDoge

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