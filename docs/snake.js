var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var x=0;
var y=0;
ctx.fillRect(x, y, 10, 10);

document.addEventListener("keydown", function(event) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (event.keyCode === 37) {
        x-=10;
        ctx.fillRect(x, y, 10, 10);
    }
    else if(event.keyCode === 38){
        y-=10;
        ctx.fillRect(x, y, 10, 10);
    }
    else if(event.keyCode === 39){
        x+=10;
        ctx.fillRect(x, y, 10, 10);
    }
    else if(event.keyCode === 40){
        y+=10;
        ctx.fillRect(x, y, 10, 10);
    }
  });
