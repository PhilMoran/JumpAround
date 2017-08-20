function GameObjects()
{
 	this.floorX = 0;
	this.floorY = window.innerHeight-150;
	this.platformPosX1 = -10;
	this.platformPosY1 = 500;
	this.platformPosX2 = 500;
	this.platformPosY2 = 100;
	this.platformPosX3 = 1100;
	this.platformPosY3 = 400;
	this.platformWidth = 485;
	this.platformHeight = 97;
	this.floorWidth = 1362;
	this.floorHeight = 150; 
	this.grass = new Image();
	this.platform = new Image();

};

GameObjects.prototype.Draw = function() {
		app.ctx = app.canvas.getContext("2d");
		this.grass.src = 'Images/grass.png';
		this.platform.src = 'Images/platform.png'
		app.ctx.drawImage(this.grass,this.floorX,this.floorY,this.floorWidth,this.floorHeight);
		app.ctx.drawImage(this.platform,this.platformPosX1,this.platformPosY1,this.platformWidth,this.platformHeight);
		app.ctx.drawImage(this.platform,this.platformPosX2,this.platformPosY2,this.platformWidth,this.platformHeight);
		app.ctx.drawImage(this.platform,this.platformPosX3,this.platformPosY3,this.platformWidth,this.platformHeight);

};
GameObjects.prototype.Update = function() {
		
};
