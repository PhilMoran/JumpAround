function Goal()
{
	this.x1 = 100;
	this.y1 = 50;
	this.x2 = 400;
	this.y2 = 50;
	this.x3 = 80;
	this.y3 =500;
	this.width = 30; 
	this.height = 30; 
	this.alive = true; 

};

Goal.prototype.Draw = function() {
	if(this.alive === true)
	{
	app.ctx = app.canvas.getContext("2d");

	app.ctx.strokeRect(this.x1,this.y1,this.width,this.height);
	app.ctx.strokeRect(this.x2,this.y2,this.width,this.height);
	app.ctx.strokeRect(this.x3,this.y3,this.width,this.height);

}
};

Goal.prototype.Reset = function()
{
	this.x1 = Math.random() * window.innerWidth;
	this.y1 = Math.random() * window.innerHeight; 
	this.alive = true; 
}