var canvas;
var context;

var thePaddle;
var paddleSpeed = 16;
var paddleWidth = 100;
var paddleHeight =15;
var paddleColour = '#ffffff';
var paddleX;
var paddleY;

var theBall;
var ballRadius = 12;
var ballColour= "#ffffff";
var ballSpeed = 8; 
var ballbouncefactor = 8;

var brickPadding = 2;
var brickColour = ['red', 'orange', 'yellow','green', 'blue'];
//var brickColour = ['#62016D', '#74217D', '#9702A7', '#C437D3', '#C861D3'];
//var brickColour = ['#329000', '#55A62A', '#4DDE00', '#7AEE3C', '#99EE6B'];
var bricksPerRow = 5;
var numRows = 5;
var numBricks = bricksPerRow * numRows;
var brickHeight = 20;
var totalBrickHeight = numRows * brickHeight;
var bricks = [];

var fps = 60;
var delay = 1000/fps;
var intervalID;
var frameCounter = 0;
var canvasBoundingRect;

function drawBackground (){
	context.beginPath();
	context.rect(0, 0, canvas.width, canvas.height);
	context.fillStyle = '#000000';
	context.fill();
};

function draw(){	
		drawBackground();	
		thePaddle.draw();
		theBall.update(thePaddle.x, thePaddle.y, thePaddle.width, thePaddle.height, bricks);
		theBall.draw();
		if(theBall.hitBottom == true){
			gameOverMessage();
			clearInterval(intervalId);		
		}
			var deadBricks = 0;
		for(var i = 0; i < numBricks; i = i + 1){
			var aBrick = bricks[i];		
				if(aBrick.alive==false){
					deadBricks = deadBricks + 1;
						if(deadBricks == numBricks){
							youWinMessage();
							clearInterval(intervalId);	
						}
				}
				else{
					aBrick.update(theBall.x, theBall.y, theBall.radius);
					aBrick.draw();
				}		
			}
		}

function youWinMessage(){
	context.font = '18pt calibri';
	context.fillStyle = '#ffffff';
	context.fillText('Congratulations. You beat me.', 30, canvas.height/2 -40);
	context.fillText('Refresh to play again.', 45, canvas.height/2 -20);
}
function gameOverMessage(){
	context.font = '18pt calibri';
	context.fillStyle = '#ffffff';
	context.fillText('Haha you lose. Game Over.', 30, canvas.height/2 -40);
	context.fillText('Refresh to play again.', 45, canvas.height/2 -20);
}

function mouseMove(e){
	thePaddle.move(e.clientX - canvasBoundingRect.left);
}	

function stackBricks (){
	var brickX;
	var brickY;
	var brickWidth = (canvas.width - (brickPadding * bricksPerRow)) / bricksPerRow;
		for(var j = 0; j < numRows; j = j+1){
			brickX = brickPadding;
			brickY = brickPadding + (j * (brickHeight + brickPadding));
				for (var i = 0; i < bricksPerRow; i = i + 1){
					var aBrick = new Brick(canvas, context, brickColour[j], brickWidth, brickHeight, brickX, brickY);
					bricks.push(aBrick);
					brickX = brickX + brickWidth + brickPadding;
				}
		}

};

function init(){
	canvas = document.getElementById("canvas");	
	context = canvas.getContext("2d");
	document.getElementById('canvas').style.cursor = 'none';
	document.addEventListener("mousemove", mouseMove, false);
	canvasBoundingRect = canvas.getBoundingClientRect();
	canvas.focus();	
	paddleX = canvas.width/2 - paddleWidth/2;
	paddleY = canvas.height - paddleHeight;
	thePaddle = new Paddle(canvas, context, paddleWidth, paddleHeight,paddleColour);
	theBall = new Ball(canvas, context, ballSpeed, ballRadius, ballColour, ballbouncefactor, totalBrickHeight);
	stackBricks ()	
	intervalId = setInterval(draw,delay); 
	
};
	 	
init();
