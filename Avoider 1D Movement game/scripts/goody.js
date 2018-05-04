
function Goody(canvas, ctx, scale, image){	
	this.canvas = canvas;
	this.ctx = ctx;	
	this.image = image;
	this.width = image.width*scale; 
	this.height = image.height*scale;
	this.x = this.y = this.speed = undefined;
	this.reset();
	this.saves = 0;	
}

Goody.prototype.reset = function(image, scale){	
	this.x = Math.round(Math.random()*(this.canvas.width - this.width));
	this.y = -Math.round(Math.random()*40 + this.width);
	this.speed = Math.round(Math.random() + 2);	
};

Goody.prototype.draw = function(){
	this.y = this.y + this.speed;
	this.ctx.drawImage(this.image,this.x,this.y,this.width,this.height);	
	if(this.x + this.width >= hero.x && this.x <= hero.x + hero.width && this.y + this.height >= hero.y && this.y <= hero.y + hero.height){
		this.saves = this.saves + 1;
		this.reset();
			if ((totalSaves + 1) % 3 === 0 ) {
				health = health + 1;
				};			
	}
	else if (this.y >= this.canvas.height + this.height){ 
		this.reset();
	};
};