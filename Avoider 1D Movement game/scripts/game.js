/*
game.js: The main game file. Everything is managed from here.
*/

var canvas, ctx;
var hero;
var health = 3;
var heroSpeed = 12;
var fps = 60;
var delay = 1000/fps;
var intervalID;
var frameCounter = 0;
var gameImages = [];
var baddies = [];
var numBaddies = 8;
var goodies = [];
var numGoodies = 1
var maxSize = 0.8
var minSize = 0.3
var totalDodges;
var totalSaves;
var canvasBoundingRect;

// The draw function draws the baddies and hero on the canvas.
function draw(){
	frameCounter = frameCounter + 1;
	ctx.fillStyle = '#000000';
	ctx.fillRect(0,0,canvas.width,canvas.height);	
	totalDodges = 0;
	for(var i = 0; i < baddies.length; i++){
		var baddy = baddies[i];
		totalDodges = totalDodges + baddy.dodges;
		baddy.draw();		
		}	
	totalSaves = 0;
	for(var i = 0; i < goodies.length; i++){
		var goody = goodies[i];
		totalSaves = totalSaves + goody.saves;
		goody.draw();		
		}
	hero.draw();
	handleCollisions();	
	printStats();
}

function printStats(){
	var msg = "Health: " + health + "       Time Played: " + Math.round(frameCounter/fps) + "       Total dodges: " + totalDodges + "       Total saves: " + totalSaves;
	ctx.font = '16pt Calibri';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(msg, 10, 30);
}

// This function tests for collisions and handles them if they occur.
function handleCollisions(){
	for(var i = 0; i < baddies.length; i++){
		var baddy = baddies[i];
		if(baddy.x + baddy.width >= hero.x && baddy.x <= hero.x + hero.width && baddy.y + baddy.height >= hero.y && baddy.y <= hero.y + hero.height){
			baddy.reset();
			health = health - 1;
			if(health === 0){
				clearInterval(intervalId);
			}
		}					
	}
	for(var i = 0; i < goodies.length; i++){
		var goody = goodies[i];
		if(goody.y >= canvas.height){
			goody.reset();;
		};					
	};
};

// If the left or right arrow keys are pressed ask the hero to move.
function keyDown(evt){	
	var key = evt.keyCode || evt.which;
	if(key === 37 || key === 39){
		var direction;
		if(key === 39){
			direction = 'RIGHT';
		}
		else if(key === 37){
			direction = 'LEFT';
		}	
		hero.move(direction);
	}	
}

function mouseMove(e){
	hero.moveX(e.clientX - canvasBoundingRect.left);
}	

function loadImages(sources, callback) {
        var loadedImages = 0;
        var numImages = sources.length;
        for(var i = 0; i < numImages; i++) {
          gameImages[i] = new Image();
          gameImages[i].onload = function() {
			loadedImages = loadedImages + 1;
            if(loadedImages >= numImages) {
              callback(gameImages);
            }
          };
		  // Set the source of the Image object to the relevant path in the sources array.
          gameImages[i].src = sources[i];
        }
}

// This function initialises the game.	
function init(){
	canvas = document.getElementById("canvas");	
	ctx = canvas.getContext("2d");
	canvas.addEventListener('keydown',keyDown,false);
	canvas.addEventListener("mousemove", mouseMove, false);
	canvasBoundingRect = canvas.getBoundingClientRect();
	canvas.focus();	
	var imageSources = ["images/hero.png","images/baddy.png", "images/goody.png"];
	loadImages(imageSources, function(imgs) {
		hero = new Hero(canvas, ctx, heroSpeed, imgs[0]);
		for(var i = 0; i < numBaddies; i++){
			var scale = (Math.random()*(maxSize - minSize)) + minSize; 
			var baddy = new Baddy(canvas,ctx,scale,imgs[1]);
			baddies.push(baddy);
			}
		for(var i = 0; i < numGoodies; i++){
			var scale = (Math.random()*(maxSize - minSize)) + minSize;
			var goody = new Goody(canvas,ctx,scale,imgs[2]);
			goodies.push(goody);
			}			
		intervalId = setInterval(draw,delay);
			});
	 	
}

init();


