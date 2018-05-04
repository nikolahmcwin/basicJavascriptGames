
function Hero(canvas, ctx, speed, image){	
	this.canvas = canvas;
	this.ctx = ctx;	
	this.speed = speed;
	this.image = image;
	this.width = image.width;
	this.height = image.height;
	this.x = canvas.width/2 - image.width/2
	this.y = canvas.height - image.height;	
}

Hero.prototype.draw = function(){			
	this.ctx.drawImage(this.image,this.x,this.y);	
};

Hero.prototype.move = function(direction){	
	if(direction === 'RIGHT'){
		this.x = this.x + this.speed;
	}
	else if(direction === 'LEFT'){
		this.x = this.x - this.speed;
	}	
};

Hero.prototype.moveX = function(mouseX){	
	this.x = mouseX - this.image.width/2;	
};
