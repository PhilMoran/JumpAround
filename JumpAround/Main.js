app = {};


function main()
{
    //Setting values to the variables initalized 
	document.addEventListener("keydown", keyDownHandler);	
	//.addEventListener("mouseup", tapOrClick, false);
	//document.addEventListener("touchend", tapOrClick, false);
	document.addEventListener("touchstart", menuTapControls, false);
	document.addEventListener('touchmove', touchDownHandler, false);
	document.addEventListener("touchstart", touchDownHandler, false);
	document.addEventListener("touchstart", endTouch, false);

	//document.addEventListener("touchend", touchDownHandler, false);

	 //Creates a new canvas element 
    app.canvas = document.createElement("canvas");
    //Adds the canvas element to the document 
    document.body.appendChild(app.canvas);
    app.canvas.width = 1362;
    app.canvas.height = 935;
    

    app.ctx = app.canvas.getContext("2d");

    app.gameObjects = new GameObjects();
    app.backGround = new BackGround();
   	app.game = new Game();
   	app.menu = new MainMenu();
   	app.sound = new Sound();
	app.player = new Player();
	app.goal = new Goal();
	app.timer = new Timer();
	app.game.Init();
	app.game.Update();
}


function rgb(r, g, b) 
{ 
	return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
}

function clamp(value, min, max)
{ 
	if(max<min) { 
		var temp = min; 
		min = max; 
		max = temp; 
	}
	return Math.max(min, Math.min(value, max)); 

}
