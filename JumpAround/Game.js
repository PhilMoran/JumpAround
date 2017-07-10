function Game()
{
 
}

Game.prototype.Init = function()
{
	console.log("Initialising game");
}

Game.prototype.Update = function()
{
	app.player.Draw();
	app.goal.Draw();
	app.player.CheckCollision(app.goal);
	window.requestAnimationFrame(app.game.Update);
}
