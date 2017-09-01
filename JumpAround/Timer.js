function Timer()
{
    this.h1 = document.getElementsByTagName('h1')[0];
    //start = document.getElementById('start'),
    //stop = document.getElementById('stop'),
    //clear = document.getElementById('clear'),
    this.miliseconds = 0; 
    this.seconds = 0; 
    this.minutes = 0;
    this.milisecondsL1 = 10; 
    this.secondsL1 = 20; 
    this.minutesL1 = 0;
    this.levelEnd = false;
    this.t;
    this.stopWatch = new Image();
    this.grey = new Image();
    this.nextButton = new Image();
    this.retryButton = new Image();
    this.exitButton = new Image();
    this.level = 0;
}
Timer.prototype.Draw = function()
{
    //app.ctx.font="20px Georgia";
    app.ctx = app.canvas.getContext("2d");
    this.stopWatch.src = 'images/cloud.png';
    app.ctx.drawImage(this.stopWatch,window.innerWidth/40,window.innerHeight/40,300,150);
    app.ctx.font="40px Impact";
    app.ctx.fillStyle=rgb(120,120,120);
    app.ctx.fillText('Timer:'+ this.minutes + ":" + this.seconds + ":" + this.miliseconds,window.innerWidth/18,window.innerHeight/7);
    if(this.levelEnd == true)
    {
        app.ctx.fillStyle=rgb(255,120,120);
        this.grey.src = 'Images/GrayedOut.png';
        this.nextButton.src = 'images/nextButton.png';
        this.retryButton.src = 'images/retryButton.png';
        this.exitButton.src = 'images/exit.png';
        app.ctx.drawImage(this.grey,0,0);
        app.ctx.fillText( this.minutes + ":" + this.seconds + ":" + this.miliseconds,window.innerWidth/2,window.innerHeight/2.5);
        app.ctx.fillText( this.minutesL1 + ":" + this.secondsL1 + ":" + this.milisecondsL1,window.innerWidth/2,window.innerHeight/2);
        app.ctx.drawImage(this.nextButton,window.innerWidth/7,window.innerHeight/1.9,200,100);
        app.ctx.drawImage(this.retryButton,window.innerWidth/3,window.innerHeight/1.9,200,100);
        app.ctx.drawImage(this.exitButton,window.innerWidth/2,window.innerHeight/1.9,200,100);

        
    }

}
Timer.prototype.Add = function() {
    this.miliseconds++;
    if (this.miliseconds >= 60) {
        this.miliseconds = 0;
        this.seconds++;
    }
    if(this.seconds >= 60)
    {
        this.seconds =0;
        this.minutes++;
    }
}
Timer.prototype.TimeControl = function() {   
    this.t = setTimeout(app.timer.Add(), 1000);
}

/* Start button */
//start.onclick = timer;

/* Stop button */
Timer.prototype.Stop = function() {
    clearTimeout(this.t);
    app.timer.BestTime();
    this.levelEnd = true;
}
Timer.prototype.BestTime = function(){
    if(this.minutes < this.minutesL1)
    {
        this.minutesL1 = this.minutes;
        this.secondsL1 = this.seconds;
        this.milisecondsL1 = this.miliseconds;
    }
    else if(this.minutes == this.minutesL1)
    {
        if(this.seconds < this.secondsL1)
        {
            this.minutesL1 = this.minutes;
            this.secondsL1 = this.seconds;
            this.milisecondsL1 = this.miliseconds;
        }
        if(this.seconds == this.secondsL1)
        {
            if(this.miliseconds < this.milisecondsL1)
            {
                 this.minutesL1 = this.minutes;
                this.secondsL1 = this.seconds;
                this.milisecondsL1 = this.miliseconds;
            }
        }
    }
}
function endTouch(e)
{
     if(app.menu.gameState == 1 && app.timer.levelEnd == true)
   {
    
    if(event.type == 'touchstart')
    {
        if(event.touches[0].clientX >= window.innerWidth /7 && event.touches[0].clientX <= window.innerWidth /7+200 &&event.touches[0].clientY >= window.innerHeight /1.9 && event.touches[0].clientY <= window.innerHeight /1.9 + 100 )
        {//next
            app.menu.gameState = 2;
            app.timer.levelEnd = false
            
        }
        if(event.touches[0].clientX >= window.innerWidth /3 && event.touches[0].clientX <= window.innerWidth /3+200 &&event.touches[0].clientY >= window.innerHeight /1.9 && event.touches[0].clientY <= window.innerHeight /1.9 + 100 )
        {//retry
            app.goal.Reset();
            app.player.Reset();
            app.timer.Clear();
            app.menu.gameState = 1;
            app.timer.levelEnd = false;

        }
        if(event.touches[0].clientX >= window.innerWidth /2 && event.touches[0].clientX <= window.innerWidth /2+200 &&event.touches[0].clientY >= window.innerHeight /1.9 && event.touches[0].clientY <= window.innerHeight /1.9 + 100 )
        {//exit
            app.goal.Reset();
            app.player.Reset();
            app.timer.Clear();
            app.menu.gameState = 0;
            app.timer.levelEnd = false
            app.menu.backgroundMusic.stop();
        }
    }
    }
}
/* Clear button */
Timer.prototype.Clear = function() {
    this.miliseconds = 0; 
    this.seconds = 0;
}