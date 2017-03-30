
const Globe = function(ctx, x, y){
  this.y = y;
  this.x = x;
  this.width = 100;
  this.height = 100;
  this.ctx = ctx;
  this.world = document.getElementById('globe');
};

Globe.prototype.render = function() {
  this.ctx.drawImage(this.world, this.x, this.y);
  this.ctx.save();
  this.ctx.restore();
};
