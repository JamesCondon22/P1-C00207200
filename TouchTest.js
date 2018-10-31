
function is_touch_device() {
	return 'ontouchstart' in window;
}
/**
 * @param {event} e events allow to access touches
 * sets the touvhes
 * sets a start x and y to the starting touch point and out puts the values
 * creates a date object and retrieves the time
 * clears the canvas after every swipe
 */
function onTouchStart(time1, e)
{
	var canvas = document.getElementById("mycanvas");
	var ctx = canvas.getContext("2d");

	touches = e.touches;
	gameNs.startX = touches[0].clientX;
	gameNs.startY = touches[0].clientY;
	gameNs.time1 = new Date().getTime();


	console.log(touches[0].clientX + ' , ' + touches[0].clientY);
	ctx.clearRect(0,0,canvas.width, canvas.height);
}
/**
 * @param {event} e events allow to access touches
 * sets the touvhes
 * sets a end x and y to the starting changed touch point and out puts the values
 * begins the path at the start x and y position and draws to the end x and y
 * resets the start x and y
 */
function onTouchMove(e)
{
	var touches = e.changedTouches;

	gameNs.endX = touches[0].clientX;
	gameNs.endY = touches[0].clientY;

	var canvas = document.getElementById("mycanvas");
	var ctx = canvas.getContext("2d");


	ctx.beginPath();
	ctx.moveTo(gameNs.startX,gameNs.startY);//the previous touch
	ctx.lineTo(gameNs.endX,gameNs.endY);//the current touch
	ctx.stroke();

	gameNs.startX = touches[0].clientX;
	gameNs.startY = touches[0].clientY;
}
/**
 * @param {eveent} e
 * resets the end x and y
 * calculates the distance between two points and outputs to the screen
 * calculates the total time taken to draw swipe in milliseconds
 * outputs this value
 * clears the screen if the length is less than minimum required or time is
 * too high
 */
function onTouchEnd(e)
{

	var canvas = document.getElementById("mycanvas");
	var ctx = canvas.getContext("2d");

	var minTime = 0;
	var maxTime = 2000;
	var minDist = 50;
	var length;
	var time2 = new Date().getTime();
 	 //console.log(time2);
	 time = time2 - gameNs.time1;

	 gameNs.endX = touches[0].clientX;
 	 gameNs.endY = touches[0].clientY;

	 length = Math.sqrt(((gameNs.endX - gameNs.startX)* (gameNs.endX - gameNs.startX)) + ((gameNs.endY - gameNs.startY) * (gameNs.endY - gameNs.startY)));
	 console.log("time = " + time);
	 console.log("length = " + length)

	 if (length < minDist || time > maxTime)
	 {
		 ctx.clearRect(0,0,canvas.width, canvas.height);
	 }
}
