function Goal()
{
	this.x1 = 1300;
	this.y1 = 300;
	this.x2 = 700;
	this.y2 = 50;
	this.x3 = 80;
	this.y3 =400;
	this.sourceWidth = 128; 
	this.sourceHeight = 128; 
	this.width =64;
	this.height =64;
	this.alive = true; 
	this.coinImage = new Image();
	this.frameIndex = 0;
    this.tickCount = 0;
    this.sprite = 0;
    this.ticksPerFrame = this.ticksPerFrame || 0;
    


};

Goal.prototype.Draw = function() {
	if(this.alive === true)
	{
	app.ctx = app.canvas.getContext("2d");
	//this.coinImage = document.getElementById("collectible");
	
	this.coinImage.src = 'images/coins.png';
	app.ctx.drawImage(this.coinImage,this.sprite,0,this.sourceWidth,this.sourceHeight,this.x1,this.y1,this.width,this.height);
	app.ctx.drawImage(this.coinImage,this.sprite,0,this.sourceWidth,this.sourceHeight,this.x2,this.y2,this.width,this.height);
	app.ctx.drawImage(this.coinImage,this.sprite,0,this.sourceWidth,this.sourceHeight,this.x3,this.y3,this.width,this.height);
	
}
};
Goal.prototype.Animate = function()
{
	if(app.goal.tickCount >= 5)
	{
		app.goal.tickCount =0;
		app.goal.sprite +=128;
	}
	if(app.goal.sprite >= 794)
	{
		app.goal.sprite =0;
	}
	if(app.goal.alive=== true)
	{
		app.goal.tickCount++; 
	}

}


Goal.prototype.Reset = function()
{
	this.x1 = Math.random() * window.innerWidth;
	this.y1 = Math.random() * window.innerHeight; 
	this.alive = true; 
}