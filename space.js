const Environment = function(c, ctx) {
    this.c = c;
    this.ctx = ctx;
    this.bgPos = 0;
    this.bgSpeed = 2;
    this.bgWidth = window.outerWidth;
    this.bgImg = document.getElementById('space');
};

Environment.prototype.render = function() {
    for (let i = 0; i <= Math.ceil(this.c.width / this.bgWidth); i++)
        this.ctx.drawImage(this.bgImg, this.bgPos + i * this.bgWidth, 0);
}

// Environment.prototype.render = function() {
//   this.ctx.drawImage(this.c, this.bgImg);
//   this.ctx.save();
//   this.ctx.restore();
// };
