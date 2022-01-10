import Matrix3 from "../math/mat3";
import { Matrix4 } from "../math/mat4";

export default class RectShape
{
  constructor(x = 0, y = 0, w = 0, h = 0)
  {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    

    this.color = [1, 1, 1, 1];
  }

  setDimensions(x, y, w, h)
  {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
  }



  setColor(r, g, b, a)
  {
    this.color = [r, g, b, a];
  }
  
  

  calculateMatrix(rw, rh)
  {
    rw = rw/2;
    rh = rh/2;
    var scale =  new Float32Array([
      1/rw*this.width, 0, 0,
      0, 1/rh*this.height, 0,
      0, 0, 1
    ]);

    var translation = new Float32Array([
      1, 0, 0,
      0, 1, 0,
      ((this.x+this.width/2) / rw)-1, ((-this.y-this.height/2) / rh)+1, 1
    ])
    

    var result = new Float32Array(9);

    Matrix3.identity(result);

    Matrix3.multiply(result, translation, scale);

    return result;
    
  }

  draw(renderer)
  {
    var ralias = renderer.shapes.RECTANGLE_SHAPE;

    ralias.shaderProg.bind();
    renderer.gl.disable(renderer.gl.DEPTH_TEST);

    ralias.shaderProg.setUniformMatrix3f("affine", this.calculateMatrix(renderer.canvas.width, renderer.canvas.height));

    ralias.shaderProg.setUniform4f("u_Color", this.color[0], this.color[1], this.color[2], this.color[3]);
    
    renderer.display.draw(ralias.mesh, ralias.shaderProg);
    renderer.gl.enable(renderer.gl.DEPTH_TEST);
  }


}