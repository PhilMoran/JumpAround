function MainMenu()
{
	
	this.menuBack = new Image();
	this.jumpImage = new Image();
	this.startButton = new Image();
	this.tutorialButton = new Image();
	this.multiplayerButton = new Image();
	this.exitButton = new Image();
	this.gameState = 0;
	this.jumpVelocity = 5;
	this.x = window.innerWidth/3;
	this.y = window.innerHeight/4.5;
	//this.theElement = document.getElementById("theElement");
	this.mainTheme = new Sound('sounds/JumpAround.wav',100,true);
	this.backgroundMusic = new Sound('sounds/JaxJones.wav',100,true);


};

MainMenu.prototype.Init = function(){
	   
	app.menu.mainTheme.start();
	
}
MainMenu.prototype.Draw = function() {
	
	app.ctx = app.canvas.getContext("2d");
	this.menuBack.src = 'images/Jump.png';	
	this.jumpImage.src = 'images/Jumpimage.png';
	this.startButton.src = 'images/playButton.png';
	this.tutorialButton.src = 'images/tutorialButton.png';
	this.multiplayerButton.src = 'images/multiplayerButton.png';
	this.exitButton.src = 'images/exitButton.png'

	app.ctx.drawImage(this.menuBack,0,0,1362,935);
	app.ctx.drawImage(this.jumpImage,this.x,this.y,500,150);
	app.ctx.drawImage(this.startButton,window.innerWidth/11,window.innerHeight/1.3,200,100);
	app.ctx.drawImage(this.tutorialButton,window.innerWidth/3.9,window.innerHeight/1.3,200,100);
	app.ctx.drawImage(this.multiplayerButton,window.innerWidth/2.2,window.innerHeight/1.3,200,100);
	app.ctx.drawImage(this.exitButton,window.innerWidth/1.5,window.innerHeight/1.3,200,100);
};
MainMenu.prototype.TextJump = function(e)
{	

		this.jumpVelocity -=0.1;
		this.y -= this.jumpVelocity;
		if(this.y >=window.innerHeight/4.5)
		{
			this.jumpVelocity = 5;
		}
}

function menuTapControls(event) {
   //handle tap or click.

   if(app.menu.gameState ==0)
   {
   	
	if(event.type == 'touchstart')
	{
		if(event.touches[0].clientX >= window.innerWidth /11 && event.touches[0].clientX <= window.innerWidth /11+200 &&event.touches[0].clientY >= window.innerHeight /1.3 && event.touches[0].clientY <= window.innerHeight /1.3 + 100 )
		{
			//app.menu.mainTheme.stop();
			//app.menu.backgroundMusic.start();
			app.menu.gameState = 1;
			app.goal.Reset();
            app.player.Reset();
            app.timer.Clear();
			
		}
		if(event.touches[0].clientX >= window.innerWidth /3.9 && event.touches[0].clientX <= window.innerWidth /3.9+200 &&event.touches[0].clientY >= window.innerHeight /1.3 && event.touches[0].clientY <= window.innerHeight /1.3 + 100 )
		{
			app.menu.gameState = 3;
			app.goal.Reset();
			app.menu.mainTheme.stop();
		}
		if(event.touches[0].clientX >= window.innerWidth /2.2 && event.touches[0].clientX <= window.innerWidth /2.2+200 &&event.touches[0].clientY >= window.innerHeight /1.3 && event.touches[0].clientY <= window.innerHeight /1.3 + 100 )
		{
			app.menu.gameState = 4;
			app.menu.mainTheme.stop();
		}
		if(event.touches[0].clientX >= window.innerWidth /1.5 && event.touches[0].clientX <= window.innerWidth /1.5+200 &&event.touches[0].clientY >= window.innerHeight /1.3 && event.touches[0].clientY <= window.innerHeight /1.3 + 100 )
		{
			app.menu.gameState = 5;
			app.menu.mainTheme.stop();
		}
	}
}
	console.log(app.menu.gameState);
    event.preventDefault();
    return false;
}
