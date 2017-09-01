function Game()
{
 
}

Game.prototype.Init = function()
{
	console.log("Initialising game");
	app.menu.Init();

}

Game.prototype.Update = function()
{
	console.log(app.menu.menuScreen);

	if(app.menu.gameState == 0)
	{
	app.menu.Draw();
	app.menu.TextJump();
	}
	if(app.menu.gameState == 1)//entersGame
	{
	app.backGround.Draw();
	app.player.Draw();
	app.gameObjects.Draw();
	app.goal.Draw();
	app.timer.Draw();
	app.goal.Animate();
	//app.player.Jump();
	app.player.CheckCollision(app.goal);
	app.player.JumpingDetection(app.gameObjects);
	app.player.Jump(app.gameObjects);

	}
	if(app.menu.gameState == 3)//entersGame
	{
	app.backGround.Draw();
	app.player.Draw();
	app.gameObjects.Draw();
	app.goal.Draw();
	//app.timer.Draw();
	app.goal.Animate();
	//app.player.Jump();
	app.player.CheckCollision(app.goal);
	//app.player.JumpingDetection(app.gameObjects);
	//app.player.Jump(app.gameObjects);

	}
	
	if(app.menu.gameState == 5)//entersGame
	{
		app.backGround.exitPress = true;
		app.backGround.Draw();
		window.close();
	}
	console.log(app.menu.gameState);
	window.requestAnimationFrame(app.game.Update);
}
