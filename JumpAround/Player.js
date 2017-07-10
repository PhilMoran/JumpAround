function Player()
{
 	this.x = window.innerWidth/2;
	this.y = window.innerHeight-200;
	this.width = 200;
	this.height = 200; 
	this.alive = true;
	this.delay = 0;
	this.stars =0;
	this.gravity = 0.1;
	this.velocityX = 0;
	this.jumping = false;
	this.velocityY=0.01;
	this.dt = 0.0001;
};

Player.prototype.Draw = function() {
	if(this.alive === true)
	{
		app.ctx = app.canvas.getContext("2d");
		app.ctx.clearRect(0,0,app.canvas.width, app.canvas.height);
		app.ctx.fillStyle = rgb(255,0,0);
		app.ctx.fillRect(this.x,this.y,this.width,this.height);
	}
};

function keyDownHandler(e)
{
	console.log(app.player.y);
	if(e.keyCode === 38) //up arrow 
	{
		if(app.player.alive === true&&app.player.jumping ==false)
		{
			app.player.y -=10;			

		}
	}

	if(e.keyCode === 37) //left arrow 
	{
		if(app.player.alive=== true)
		{
			app.player.x-=10;
		}
	}

	if(e.keyCode === 39) // right arrow 
	{
		if(app.player.alive=== true)
		{
			app.player.x+=10; 
		}
	}
}


Player.prototype.CheckCollision = function(e)
{
	if((this.x < e.x1 + e.width) && 
		(this.x + this.width > e.x1) && 
		(this.y + this.height > e.y1) && 
		(this.y < e.y1 + e.height))
	{
		e.x1 = -100;
		e.y1 = -100;
		this.stars++;
	}
	if((this.x < e.x2 + e.width) && 
		(this.x + this.width > e.x2) && 
		(this.y + this.height > e.y2) && 
		(this.y < e.y2 + e.height))
	{
		e.x2 = -100;
		e.y2 = -100;
		this.stars++;
	}
	if((this.x < e.x3 + e.width) && 
		(this.x + this.width > e.x3) && 
		(this.y + this.height > e.y3) && 
		(this.y < e.y3 + e.height))
	{
		e.x3 = -100;
		e.y3 = -100;
		this.stars++;
	}
	if(this.stars == 3)
	{
		app.player.Collided(e);
		this.alive = false;
	}

	if(this.delay === 100)
	{
		app.player.Reset();
		app.goal.Reset();
		this.delay = 0; 
	}
	 
};
Player.prototype.Collided = function(e)
{
	e.alive = false; 
	app.ctx.save(); 
	app.ctx.fillStyle=rgb(0,0,0);
	app.ctx.font = 'bold 72pt hemi head bd it';
	app.ctx.TextBaseline = "top";
	app.ctx.fillText("Your Time:", 400, 400);
	app.ctx.restore();
}

Player.prototype.Reset = function()
{
	this.x = Math.random() * window.innerWidth;
	this.y = Math.random() * window.innerHeight;
	this.alive = true;
	app.ctx.fillText("", 45, 45);
};