function GameObjects()
{
 	this.x = window.innerWidth/2;
	this.y = window.innerHeight-150;
	this.width = 1362;
	this.height = 150; 
	this.grass = new Image();

};

GameObjects.prototype.Draw = function() {
		app.ctx = app.canvas.getContext("2d");
		this.grass.src = 'Images/grass.png';
		app.ctx.drawImage(this.grass,0,this.y,this.width,this.height);

};

