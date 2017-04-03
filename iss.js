
const Iss = function(ctx, x, y){
  this.ctx = ctx;
  this.x = x;
  this.y = y;
  this.iss = document.getElementById('iss');
};

Iss.prototype.render = function(){
  this.ctx.drawImage(this.iss, this.x, this.y);
  this.ctx.save();
  this.ctx.restore();
};
