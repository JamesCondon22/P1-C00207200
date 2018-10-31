

 /**
  * @author James Condon
	* @reviewed by Brenden Horlick
  * This is an application that allows the user to draw a line on the
	* using a swipe from the starting to the endX
	* only draws if the length is more than a certain amount
	* or time is less
	*/




var gameNs = {};

function main()
{
	var time1 = null;
	initCanvas();
	document.addEventListener("touchstart", onTouchStart.bind(null, time1), false);
  document.addEventListener("touchmove", onTouchMove, false);
	document.addEventListener("touchend", onTouchEnd, false);
	console.log(is_touch_device());

}


/**
 * Initialises the canvas - the drawing surface. The canvas
 * is added to the document. When a HTML document is loaded into a
 * browser, it becomes a document object. This document object is
 * the root node of the HTML document and is considered the 'owner' of all other
 * nodes such as forms, buttons, the canvas etc.
 */
function initCanvas()
{
	// Use the document object to create a new element canvas.
	var canvas = document.createElement("canvas");
	// Assign the canvas an id so we can reference it elsewhere.
	canvas.id = 'mycanvas';
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	// We want this to be a 2D canvas.
	var ctx = canvas.getContext("2d");
	// Adds the canvas element to the document.
	document.body.appendChild(canvas);
}
