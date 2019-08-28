
var speed = 400; // lower is faster

var ctx;


var thisArray = [[200,10],[50,160],[200,200],[300, 160],[200,10]];
var count = 0;
var imageObj = new Image();

imageObj.onload = function() {
    // get canvas context
    ctx = document.getElementById('canvas').getContext('2d');
    ctx.drawImage(imageObj, 800, 600);
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 5;
    ctx.beginPath();
  
    // set refresh rate
    return setInterval(draw, speed);
}
//activate the interval event by loading the image
imageObj.src = './white-blank-page.png';

function draw () {
    ctx.lineTo(thisArray[count][0], thisArray[count][1]);
    if (count < thisArray.length)
        count++;
    else
    clearInterval(this);

    ctx.stroke();
}