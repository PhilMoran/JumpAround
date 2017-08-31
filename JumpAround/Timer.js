function Timer()
{
    this.h1 = document.getElementsByTagName('h1')[0],
    //start = document.getElementById('start'),
    //stop = document.getElementById('stop'),
    //clear = document.getElementById('clear'),
    this.miliseconds = 0, 
    this.seconds = 0, 
    this.minutes = 0,
    this.t;
}
Timer.prototype.Add = function() {
    this.miliseconds++;
    if (this.miliseconds >= 60) {
        this.miliseconds = 0;
        this.seconds++;
    }
    
    this.h1.textContent = (this.seconds ? (this.seconds > 9 ? this.seconds : "0" + this.seconds) : "00") + ":" + (this.miliseconds > 9 ? this.miliseconds : "0" + this.miliseconds);

}
Timer.prototype.TimeControl = function() {   
    this.t = setTimeout(app.timer.Add(), 1000);
}

/* Start button */
//start.onclick = timer;

/* Stop button */
Timer.prototype.Stop = function() {
    clearTimeout(this.t);
}

/* Clear button */
Timer.prototype.Clear = function() {
    this.h1.textContent = "00:00";
    this.miliseconds = 0; 
    this.seconds = 0;

}