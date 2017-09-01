function Tutorial()
{
	this.width = 600;
	this.height = 600; 
	this.swipe = new Image();
	this.jump = new Image();
	this.starCollect = new Image();
	

};

Tutorial.prototype.Draw = function() {
		app.ctx = app.canvas.getContext("2d");
		this.swipe.src = 'Images/swipe.png';
		this.jump.src = "Images/JumpTut.png";
		this.starCollect.src = "Images/CoinTut.png";
		if(app.player.stars == 0)
		{
			app.ctx.drawImage(this.swipe,window.innerWidth/3,window.innerHeight/7,this.width,this.height);
		}
		if(app.player.stars ==1)
		{
			app.ctx.drawImage(this.jump,0,0,1365,935);
		}
		if(app.player.stars == 2)
		{
			app.ctx.drawImage(this.starCollect,530,window.innerHeight/80,400,600);
		}

};

