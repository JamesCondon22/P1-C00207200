class GestureManager
{
  constructor()
  {
    this.startX = null
    this.startY = null

  }

  init()
  {
    this.document.addEventListener("touchstart", this.onTouchStart.bind(this), false);
    //document.addEventListener("touchmove", this.onTouchMove.bind(this), false);
    //document.addEventListener("touchend", this.onTouchEnd.bind(this), false);
  }

  onTouchStart(e)
  {
    this.touches = e.touches
    this.startX = touches[0].clientX
    this.startY = touches[0].clientY

    console.log(touches[0].clientX + ' , ' + touches[0].clientY);
  }

}
