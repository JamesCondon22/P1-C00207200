class Game
{
  constructor()
  {

  }

  initWorld()
  {
    console.log("Initialising Game World");
		this.update = this.update.bind(this);
  }

  update()
  {
    window.requestAnimationFrame(gameNs.game.update);
    console.log("Updating")
    this.render()
  }

  render()
  {
    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d")
    console.log("Rendering")
    ctx.clearRect(0,0,canvas.width,canvas.height)
  }
}
