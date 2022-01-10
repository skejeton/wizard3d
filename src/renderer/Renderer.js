import Mesh from "../agljs/src/Mesh";
import Wizard from "../agljs/src/aglWizard";

export default class Renderer
{
  constructor(gl, canvas)
  {
    this.gl = gl;
    this.wiz = new Wizard(gl);

    this.canvas = canvas;
    
    this.display = this.wiz.createDisplay();
    this.shapes = {};

    // RectShapeRegistrar.register(this.shapes, this.wiz);
    // BoxShapeRegistrar.register(this.shapes, this.wiz);
    this.display.enableCulling();

  }

  clearColor(r, g, b, a)
  {
    this.display.clearColor(r, g, b, a);
  }
  clear()
  {
    this.display.clear();
  }

  draw(drawable)
  {
    drawable.draw(this);
  }
}