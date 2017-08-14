function Player()
{
 	this.x = window.innerWidth/2;
	this.y = window.innerHeight-240;
	this.width = 2934;
	this.height = 1614; 
	this.playerWidth = 120;
	this.playerheight = 190; 
	this.alive = true;
	this.delay = 0;
	this.stars =0;
	this.gravity = 500;
	this.speed = 200;
	this.distance =0;
	this.velocityX = 0;
	this.jumping = false;
	this.velocityY=0;
	this.dt = 0.0001;
	this.playerSprite = new Image();
	this.direction =0;
	this.spriteAnimation = 0;
	this.rightAnimation =0;
};

Player.prototype.Draw = function() {
	if(this.alive === true)
	{
		app.ctx = app.canvas.getContext("2d");
		this.playerSprite.src = 'Images/Running.png';
		app.ctx.drawImage(this.playerSprite,this.rightAnimation,this.direction,this.width/6,this.height/2,this.x,this.y,this.playerWidth,this.playerheight);

	}
};

function keyDownHandler(e)
{
	console.log(app.player.y);

	app.player.velocityX = (app.player.x/app.player.distance)*app.player.speed;

	if(e.keyCode === 38) //up arrow 
	{
		if(app.player.alive === true&&app.player.jumping ==false)
		{
			app.player.y += -20;			

		}
	}

	if(e.keyCode === 37) //left arrow 
	{
		if(app.player.alive=== true)
		{
			app.player.x -= 3;
			app.player.direction =807;
			app.player.spriteAnimation++;
		}
	}
	if(app.player.spriteAnimation >= 5)
	{
		app.player.spriteAnimation =0;
		app.player.rightAnimation +=489;
	}
	if(app.player.rightAnimation >= 2934)
	{
		app.player.rightAnimation =0;
	}

	if(e.keyCode === 39) // right arrow 
	{
		if(app.player.alive=== true)
		{
			app.player.direction =0;
			app.player.x +=3;
			app.player.spriteAnimation++; 
		}
	}
	app.ctx.clearRect(0, 0, 1920, 1080 );
}


Player.prototype.CheckCollision = function(e)
{
	if((this.x < e.x1 + e.width) && 
		(this.x + this.playerWidth > e.x1) && 
		(this.y + this.playerHeight > e.y1) && 
		(this.y < e.y1 + e.height))
	{
		e.x1 = -100;
		e.y1 = -100;
		this.stars++;
	}
	if((this.x < e.x2 + e.width) && 
		(this.x + this.playerWidth > e.x2) && 
		(this.y + this.playerHeight > e.y2) && 
		(this.y < e.y2 + e.height))
	{
		e.x2 = -100;
		e.y2 = -100;
		this.stars++;
	}
	if((this.x < e.x3 + e.width) && 
		(this.x + this.playerWidth > e.x3) && 
		(this.y + this.playerHeight > e.y3) && 
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
	 console.log(e.x);
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