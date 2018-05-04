
function Ball(xPosn, yPosn, ctx, minSpeed, maxSpeed, minRadius, maxRadius, colours) {
	this.x = xPosn;
	this.y = yPosn;
	this.ctx = ctx;
	this.speed = round(random()*(maxSpeed-minSpeed)+minSpeed);
		var angle = random()*2*pi; 
	this.xSpeed = round(cos(angle)*this.speed);
	this.ySpeed = round(sin(angle)*this.speed);
	this.radius = round(random()*(maxRadius-minRadius)+minRadius);
		var index = floor(random()*lengthColours);
	this.colour = colours[index];
	this.canvasWidth = 2*xPosn;
	this.canvasHeight = 2*yPosn;
	};
	
Ball.prototype.toString = function (){
console.log(" x: " + this.x + " y: " +this.y + " speed: " + this.speed + " xSpeed: " + this.xSpeed + " ySpeed: " +this.ySpeed + " radius: " + this.radius + " colour: " +this.colour);
};

Ball.prototype.reset = function (){
		var angle = random()*2*pi;
	this.speed = round(random()*(maxSpeed-minSpeed)+minSpeed);
	this.xSpeed = round(cos(angle)*this.speed);
	this.ySpeed = round(sin(angle)*this.speed);
	this.radius = round(random()*(maxRadius-minRadius)+minRadius);
		var index = floor(random()*lengthColours);
	this.colour = colours[index];
};

Ball.prototype.update = function(){
	this.x = this.x + this.xSpeed;
	this.y = this.y + this.ySpeed;
	//this.radius = this.radius + 0.4;
	if(this.x < -this.radius || this.x > this.canvasWidth+this.radius || this.y < -this.radius || this.y > this.canvasHeight+this.radius){
		this.x = this.canvasWidth/2;
		this.y = this.canvasHeight/2;
		this.reset();
	};
};


Ball.prototype.draw = function(){
	this.ctx.beginPath();
	this.ctx.arc(this.x, this.y, this.radius, 0, 2*pi, false);
	this.ctx.fillStyle = this.colour;
	this.ctx.fill();
};

	
		
	
	