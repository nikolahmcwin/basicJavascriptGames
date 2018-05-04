// Baddy constructor.
function Baddy(canvas, ctx, scale, image){	
	this.canvas = canvas;
	this.ctx = ctx;	
	this.image = image;
	this.width = image.width*scale; 
	this.height = image.height*scale;
	this.x = this.y = this.speed = undefined;
	this.reset();	
	this.dodges = 0;
}
// This function resets the position of the baddy so its x position is somewhere along the top edge of the canvas.
Baddy.prototype.reset = function(){	
	this.x = Math.round(Math.random()*(this.canvas.width - this.width));
	this.y = -Math.round(Math.random()*40 + this.width);
	this.speed = Math.round(Math.random()+2);	
};
// This function draws the baddy. 
Baddy.prototype.draw = function(){
	this.y = this.y + this.speed;
	this.ctx.drawImage(this.image,this.x,this.y,this.width,this.height);	
	if(this.y >= this.canvas.height + this.height){
		this.dodges = this.dodges + 1;
		this.reset();
	}
};