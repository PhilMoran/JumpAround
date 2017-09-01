function BackGround()
{
 	this.x = window.innerWidth/2;
	this.y = window.innerHeight-200;
	this.width = 1362;
	this.height = 935; 
	this.backDrop = new Image();
	this.end = new Image();
	this.exitPress = false;

};

BackGround.prototype.Draw = function() {
		app.ctx = app.canvas.getContext("2d");
		this.backDrop.src = 'Images/background.png';
		app.ctx.drawImage(this.backDrop,0,0,this.width,this.height);

		if(this.exitPress == true)
		{
			this.end.src = 'Images/exit.jpg';
			app.ctx.drawImage(this.end,0,0,this.width,this.height);
		}
};

