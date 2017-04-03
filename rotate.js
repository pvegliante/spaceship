
var i = 0;
var redraw = function() {
    console.log('laiugh');
    environment.render();
    globe.render();
    iss.render();
    ctx.save();
    ctx.translate(c.width/2 - 55 , c.height/2 - 55 );
    ctx.rotate(i / 150);
    ctx.translate(150, 0);
    // circle('green', 10);
    ctx.restore();

    i++;
    window.requestAnimationFrame(redraw);
}
redraw();
