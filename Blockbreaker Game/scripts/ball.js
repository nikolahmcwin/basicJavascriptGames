function Ball(canvas, context, speed, radius, colour, bouncefactor, startPosn){	
	this.canvas = canvas;
	this.ctx = context;	
	this.speed = speed;
	this.radius = radius;
	this.x = canvas.width/2; 
	this.y = startPosn + this.radius * 2;
	this.colour = colour;
	this.bounceFactor = bouncefactor;
	this.xSpeed = (Math.random()*(this.speed*2)) - this.speed;
	//this.xSpeed = this.speed
	this.ySpeed = this.speed;
	this.hitBottom = false;
	//console.log(this.xSpeed);
}

Ball.prototype.draw = function(){
	this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = this.colour;
    this.ctx.fill();
};

Ball.prototype.hasHitBrick = function(theBrick){
	for ( var i = 0; i < theBrick.length; i++){
		var oneBrick = theBrick[i]
			if (oneBrick.alive == true && this.x + this.radius >= oneBrick.x && this.x < oneBrick.x + oneBrick.width && this.y + this.radius >= oneBrick.y && this.y <= oneBrick.y + oneBrick.height){
				oneBrick.alive = false;
				this.y = oneBrick.y + oneBrick.height;
				this.ySpeed = -this.ySpeed;
			}
		}
};



Ball.prototype.update = function(paddleX, paddleY, paddleWidth, paddleHeight, theBrick){
	this.x = this.x + this.xSpeed;
	this.y = this.y + this.ySpeed;
	this.hasHitBrick(theBrick);
		if(this.x > canvas.width){
			this.x = this.x - this.radius;
			this.xSpeed = -this.xSpeed;
			}
		if(this.x <= this.radius){
			this.x = this.radius;
			this.xSpeed = -this.xSpeed;
			}
		if(this.y < this.radius){
			this.y = this.radius;
			this.ySpeed = -this.ySpeed;
			}
		if(this.y >= canvas.height - this.radius){
			this.hitBottom = true;
			}
		if(this.x + this.radius >= paddleX && this.x - this.radius <= paddleX + paddleWidth && this.y + this.radius >= paddleY && this.y <= paddleY + paddleHeight){ 
			this.ySpeed = -this.ySpeed;
			this.xSpeed = this.bounceFactor * ((this.x -(paddleX+paddleWidth/2))/paddleWidth)
		};
};


/*Ball.prototype.hasCollidedWithPaddle = function (){
	if(this.y = Paddle.y + this.radius){
			this.ySpeed = -this.ySpeed;
			}
};
*/
	

