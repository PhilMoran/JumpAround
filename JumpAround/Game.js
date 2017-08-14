function Game()
{
 
}

Game.prototype.Init = function()
{
	console.log("Initialising game");
}

Game.prototype.Update = function()
{
	app.backGround.Draw();

	app.player.Draw();
	app.gameObjects.Draw();
	app.goal.Draw();
	app.goal.Animate();
	app.player.CheckCollision(app.goal);
	window.requestAnimationFrame(app.game.Update);
}
