export default class Player
{
  constructor(x, y)
  {
    this.x = x;
    this.y = y;
    this.vy = 0;
    this.vx = 0;
  }
  getMapCoords(mapw, maph)
  {
    return {
      x: -this.x/mapw,
      y: -this.y/maph
    }
  }

  move(vx, vy)
  {
    this.vx += vx;
    this.vy += vy;
  }

  update()
  {




    this.x += this.vx;
    this.y += this.vy;

    this.vx = 0;
    this.vy = 0;
  }
}