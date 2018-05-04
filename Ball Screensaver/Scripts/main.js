
var numBalls = 300;
var minSpeed = 3;
var maxSpeed = 8;
var minRadius = 2;
var maxRadius = 30;
//var colours =['#8C04A8','#6E227E','#5A016D','#B939D3','#C062D3', '#9702A7', '#74217D', '#62016D', '#C437D3', '#C861D3'];
var colours = ['#1DD300', '#389E28', '#138900', '#52E93A', '#7AE969', '#4DDE00', '#55A62A', '#329000', '#7AEE3C', '#99EE6B'];
//var colours = ['red', 'green', 'blue', 'yellow', 'orange', 'pink', 'purple'];
//var colours = ['#FF0000','#BF3030','#A60000','#FF4040','#FF7373','#FF7373','#CD0074','#992667','#85004B','#E6399B','#E667AF','#00CC00','#269926','#008500','#39E639','#67E667','2219B2','#342F85','#0E0874','#554DD8','#7872D8','#FFC300','#BF9E30','#A67F00','#FFD240','#FFDE73'];
var lengthColours = colours.length;
var fps = 60;
var balls = [];
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var intervalId;
var delay = 1000/fps;

function drawBackground (){
	ctx.beginPath();
	ctx.rect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = '#000000';
	ctx.fill();
};
		
function draw (){
	drawBackground();
		for(var i = 0; i < numBalls; i++){
			var aBall = balls[i];
			aBall.update();
			aBall.draw()
		}
};


function init () {
	for (var i=0; i < numBalls; i++){
		var aBall = new Ball(canvas.width/2, canvas.height/2, ctx, minSpeed, maxSpeed, minRadius, maxRadius, colours);
		//alert(aBall.speed);
		balls.push(aBall);
		aBall.toString();
	}

	intervalId = setInterval(draw, delay);
};

init();
