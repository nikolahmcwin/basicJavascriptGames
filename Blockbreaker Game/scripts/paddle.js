
function Paddle(canvas, context, width, height, colour){	
	this.canvas = canvas;
	this.ctx = context;
	this.width = width
	this.height = height;
	this.colour = colour;
	this.x = canvas.width/2 - this.width/2;
	this.y = canvas.height - this.height;	
}

Paddle.prototype.draw = function(){			
this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.width, this.height);
    this.ctx.fillStyle = this.colour;
    this.ctx.fill();     
};

Paddle.prototype.move = function(mouseX){	
	this.x = mouseX - this.width/2;		
};


/*Paddle.prototype.toString = function(){	
	console.log("Width: "+this.width+" Height: "+this.height+" Colour: "+this.colour+" xPosn "+this.x+" yPosn "+this.y);
};*/
