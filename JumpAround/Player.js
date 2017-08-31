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
	this.jump = false;
	this.velocityY=12;
	this.dt = 0.0001;
	this.playerSprite = new Image();
	this.direction =0;
	this.spriteAnimation = 0;
	this.rightAnimation =0;
	this.previousX =0;
	this.previousY =0;
	//this.collectSound = new Sound('sounds/sound.mp3',100,true);
	this.jumpEffect = new Sound('sounds/Jump.wav',100,true);
	this.coinEffect = new Sound('sounds/CoinSound.wav',100,true);
	
};

Player.prototype.Draw = function() {
	if(this.alive === true)
	{
		app.ctx = app.canvas.getContext("2d");
		this.playerSprite.src = 'Images/Running.png';
		app.ctx.drawImage(this.playerSprite,this.rightAnimation,this.direction,this.width/6,this.height/2,this.x,this.y,this.playerWidth,this.playerheight);
		app.timer.TimeControl();
		
	}
};
Player.prototype.LoadSounds = function() {
	}
function keyDownHandler(e)
{
	console.log(app.player.y);

	app.player.velocityX = (app.player.x/app.player.distance)*app.player.speed;

	if(e.keyCode === 38) //up arrow 
	{

		if(app.player.alive === true&&app.player.jumping ==true)
		{
				
			app.player.jump = true;
		}
	}


	if(e.keyCode === 37) //left arrow 
	{
		if(app.player.alive=== true)
		{
			app.player.x -= 6;
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
			app.player.x +=6;
			app.player.spriteAnimation++; 
		}
	}
	app.ctx.clearRect(0, 0, 1920, 1080 );

}
function touchDownHandler(e)
{
	console.log(app.player.y);
	e.preventDefault();

	 

	app.player.velocityX = (app.player.x/app.player.distance)*app.player.speed;

	
	if(e.touches[0].clientY <= window.innerHeight/4) //left arrow 
	{
	
		 if(app.player.alive === true&&app.player.jumping ==true)
		{
			app.player.jump = true;
			app.player.jumpEffect.start();
		}    
	}
	///app.player.previousY = e.touches[0].clientY; 
	

	if(e.touches[0].clientX <= app.player.previousX) //left arrow 
	{
		if(app.player.alive=== true)
		{
			if(app.player.jump ==true)
			{
			app.player.x -= 2;
			}
			else
			{
				app.player.x-=4;
			}
			app.player.direction =807;
			app.player.spriteAnimation++;
		}
	}
	
	if(e.touches[0].clientX >= app.player.previousX ) // right arrow 
	{
		if(app.player.alive=== true)
		{
			if(app.player.jump ==true)
			{
				app.player.x += 2;
			}
			else
			{
				app.player.x +=4;
			}
			app.player.direction =0;

			app.player.spriteAnimation++; 
		}
	}

	app.player.previousX = e.touches[0].clientX;

	if(app.player.spriteAnimation >= 5)
	{
		app.player.spriteAnimation =0;
		app.player.rightAnimation +=489;
	}
	if(app.player.rightAnimation >= 2934)
	{
		app.player.rightAnimation =0;
	}

	
	app.ctx.clearRect(0, 0, 1920, 1080 );

}


                                                                                             


Player.prototype.CheckCollision = function(e)
{
	
	//console.log((new Audio()).canPlayType("audio/ogg; codecs=vorbis"));

	if((this.x < e.x1 + e.width) && 
		(this.x + this.width/24 > e.x1) && 
		(this.y + this.height/10 > e.y1) && 
		(this.y < e.y1 + e.height))
	{
		e.x1 = -100;
		e.y1 = -100;
		this.stars++;
		this.coinEffect.start();
	}
	if((this.x < e.x2 + e.width) && 
		(this.x + this.width/24 > e.x2) && 
		(this.y + this.height/10 > e.y2) && 
		(this.y < e.y2 + e.height))
	{
		e.x2 = -100;
		e.y2 = -100;
		this.stars++;
		this.coinEffect.start();
	}
	if((this.x < e.x3 + e.width) && 
		(this.x + this.width/24 > e.x3) && 
		(this.y + this.height/10 > e.y3) && 
		(this.y < e.y3 + e.height))
	{
		e.x3 = -100;
		e.y3 = -100;
		this.stars++;
		this.coinEffect.start();
	}
		if(this.stars == 3)			
	{	
		app.timer.Stop();
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
Player.prototype.JumpingDetection = function(e)
{
	if((this.x < e.floorX + e.floorWidth) && 
			(this.x + this.width/24 > e.floorX) && 
			(this.y + this.height/10 > e.floorY+80) && 
			(this.y < e.floorY + e.floorHeight))
		{
			this.jumping = true;
		}
	else if((this.x < e.platformPosX1 + e.platformWidth) && 
			(this.x + this.width/24 > e.platformPosX1) && 
			(this.y + this.height/10 > e.platformPosY1-35) && 
			(this.y < e.platformPosY1 + e.platformHeight-100))
		{
			this.jumping = true;
		}	
	else if((this.x < e.platformPosX2 + e.platformWidth) && 
			(this.x + this.width/24 > e.platformPosX2) && 
			(this.y + this.height/10 > e.platformPosY2-35) && 
			(this.y < e.platformPosY2 + e.platformHeight-100))
		{
			this.jumping = true;
		}
	else if((this.x < e.platformPosX3 + e.platformWidth) && 
			(this.x + this.width/24 > e.platformPosX3) && 
			(this.y + this.height/10 > e.platformPosY3-35) && 
			(this.y < e.platformPosY3 + e.platformHeight-100))
		{
			this.jumping = true;
		}
		else
		{
			this.jumping = false;
		}


		console.log(this.jumping)
	
}
Player.prototype.Jump = function(e)
{	

	if(this.jump)
	{
		this.velocityY -=0.1;
		this.y -= this.velocityY;
	}
		//if(this.y >= 700)
		//{
		//	this.jump = false;
		//	this.velocityY = 10;
		//}
		if((this.x < e.platformPosX1 + e.platformWidth)&&(this.x + this.width/24 > e.platformPosX1)&&(this.y + this.height/10 > e.platformPosY1-30) && (this.y < e.platformPosY1 + e.platformHeight))
		{
			this.jump = false;
			this.velocityY = 10;
			//if(this.jumping == false)
			//{
			//	this.velocityY -=0.1;
			//}	
		} 
		if((this.x < e.platformPosX2 + e.platformWidth)&&(this.x + this.width/24 > e.platformPosX2)&&(this.y + this.height/10 > e.platformPosY2-30) && (this.y < e.platformPosY2 + e.platformHeight))
		{
			this.jump = false;
			this.velocityY = 10;
			if(this.jumping == false)
			{
				this.velocityY -=0.1;
			}	
		} 
		if((this.x < e.platformPosX3 + e.platformWidth)&&(this.x + this.width/24 > e.platformPosX3)&&(this.y + this.height/10 > e.platformPosY3-30) && (this.y < e.platformPosY3 + e.platformHeight))
		{
			this.jump = false;
			this.velocityY = 10;

			if (this.x<990) 
			{
				this.x -=2;
				//this.y +=5;
			}
			
		} 
	if(this.jump == false && this.jumping == false)//Fall off Ledges
	{
		this.y +=7;
	}
		

		console.log(this.x);
		console.log(this.y);
		
			//velocityY = 0;
		
}
Player.prototype.MoveRight = function(e)
{

}

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