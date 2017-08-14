function BackGround()
{
 	this.x = window.innerWidth/2;
	this.y = window.innerHeight-200;
	this.width = 1362;
	this.height = 935; 
	this.backDrop = new Image();

};

BackGround.prototype.Draw = function() {
		app.ctx = app.canvas.getContext("2d");
		this.backDrop.src = 'Images/background.png';
		app.ctx.drawImage(this.backDrop,0,0,this.width,this.height);

};

