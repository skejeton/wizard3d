import RectShape from "../renderer/rectShape";

export default class MiniMap
{
  constructor(x = 0, y = 0, width = 0, height = 0)
  {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.rect = new RectShape();
    this.map = {};
    this.objs = [];


  }

  setObjects(objs)
  {
    this.objs = objs;
  }

  setMap(map, w, h)
  {
    this.map.data = map;
    this.map.w = w;
    this.map.h = h;
  }

  draw(renderer)
  {

    var rectw = Math.floor(this.width / this.map.w);
    var recth = Math.floor(this.height / this.map.h);

    this.rect.setDimensions(0, 0, this.width+rectw-3, this.height+recth-3)

    this.rect.setColor(0, 0, 0.5, 1);
    
    renderer.draw(this.rect);

    this.rect.setColor(0.7, 0.7, 0.7, 1);

    this.map.data.split('').forEach((e, id) => {
      if (e !== "#") return;
      var i = id % this.map.w;
      var j = Math.floor(id / this.map.h);


      this.rect.setDimensions(Math.floor(i * rectw + Math.floor(rectw/2)), j * recth + Math.floor(recth/2), rectw, recth);

      renderer.draw(this.rect);
    })

    this.rect.setColor(0.7, 0.7, 0, 1);

    var objw = rectw / 2;
    var objh = recth / 2;

    this.objs.forEach((e) => {
      var normx = e.x * (rectw * this.map.w) + rectw/2;
      var normy = e.y * (recth * this.map.h) + rectw/2;


      this.rect.setDimensions(normx + objw / 2, normy + objh / 2, objw, objh);   
      renderer.draw(this.rect);

    })

  }
}