export default class InputHandler
{
  constructor()
  {
    this.keys = {};
    window.onkeyup = window.onkeydown = (e) =>
    {
      this.keys[e.key] = e.type == "keydown";
    }
    this.mousevel = {x: 0, y: 0};
    this.mousebuttons = {};

    window.onmousemove = (e) =>
    {
      this.mousevel.x = e.movementX;
      this.mousevel.y = e.movementY;
    }

    window.onmousedown = window.onmouseup = (e) =>
    {
      this.mousebuttons[e.button] = e.type == "mousedown";
    }

    this.buttons = {
      LEFT: 0,
      MIDDLE: 1,
      RIGHT: 2
    } 
  }
  isPressed(key)
  {
    return this.keys[key] ? true : false;
  }

  isMousePressed(key)
  {
    return this.mousebuttons[key];
  }

  mouseVelocity()
  {
    var oldx = this.mousevel.x;
    var oldy = this.mousevel.y;

    this.mousevel = {x: 0, y: 0};
    return {x: oldx, y: oldy};

  }
}