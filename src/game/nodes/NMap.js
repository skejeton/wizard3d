import NWall from "./Wall";
import Node from "./node";

export default class NMap extends Node
{
  constructor()
  {
    super();
    this.data = new Array();
    this.entities = new Array();
    
  }

  fromString(str, w, h)
  {
    this.width = w;
    this.height = h;
    str.split("").forEach((e, id) => {
      var i = id%w;
      var j = Math.floor(id/w);
      if (e == "P")
      {
        this.playerX = i;
        this.playerY = j;
      }
      else if (e == "#")
      {
        var wall = new NWall(i, j, this.game);
        this.data.push(wall);
      }
    })

  }

  getAt(x, y)
  {
    return this.data[y * this.width + x];
  }

  draw(renderer)
  {
    this.data.forEach((e) => {
      e.draw(renderer);
    })
  }
}