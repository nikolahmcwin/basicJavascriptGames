function Brick(canvas, context, colour, width, height, xPosn, yPosn){	
	this.canvas = canvas;
	this.ctx = context;	
	this.colour = colour;
	this.width = width;
	this.height = height;
	this.x = xPosn;
	this.y = yPosn;
	this.alive = true;
}

Brick.prototype.draw = function(){
	this.ctx.beginPath();
	this.ctx.rect(this.x, this.y, this.width, this.height);
	this.ctx.fillStyle = this.colour;
	this.ctx.fill();
};

Brick.prototype.update = function(ballX, ballY, ballRadius){
	if (this.x + this.width >= ballX && this.x <= ballX + ballRadius && this.y + this.height >= ballY && this.y <= ballY + ballRadius){
		this.alive = false;
		}
	};
	
	

