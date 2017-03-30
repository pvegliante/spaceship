


var circle = function(color, r) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, 2 * Math.PI, true);
    ctx.closePath();
    ctx.fill();
}

var i = 0;
var redraw = function(){
  console.log('laiugh');
  // ctx.fillRect(0, 0, c.width, c.height);
  // environment.update();
  environment.render();
  globe.render();
ctx.save();
    // paint bg
    // ctx.fillStyle = 'black';
    // ctx.fillRect(0, 0, w, h);
    // set origin to center
    ctx.translate(c.width / 2, c.height / 2);
    // draw sun
    // circle('yellow', 20);
    // rotate + move along x
    ctx.rotate(i / 100);
    ctx.translate(250, 0);
    // draw planet
    circle('green', 10);
    ctx.restore();

    i++;
     window.requestAnimationFrame(redraw);
}
redraw();
