import { Matrix4 } from "../math/mat4";
import RenderObject from "./renderObject";

export default class BoxShape extends RenderObject
{
  constructor()
  {
    super();
    this.world = new Float32Array(16);
    Matrix4.identity(this.world);
  }

  setAssets(assets)
  {
    this.assets = assets;
  }

  setTexture(tex)
  {
    this.texture = tex; 
  }


  draw(renderer)
  {
    
    var ralias = this.assets.BOX_SHAPE;
    ralias.mesh.setTexture(this.texture);
    ralias.shaderProg.bind();
    ralias.shaderProg.setUniform1i("_sampler", 0);
        
    renderer.camera.passUniforms(ralias.shaderProg, this.world);
    
    renderer.display.draw(ralias.mesh, ralias.shaderProg);
  }


}