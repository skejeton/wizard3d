import Object3d from "./Object3d";

export default class RenderObject extends Object3d
{

  setShaderProg(spr)
  {
    this.shaderProg = spr;
  }
  
  setMesh(mesh)
  {
    this.mesh = mesh;
  }

  cacheMatrix()
  {
    this.cmat = this.calculateMatrix();

    return this.cmat;
  }

  setPreDrawFunction(func)
  {
    this.predraw = func;
  }

  draw(renderer)
  {
    this.predraw(renderer);
    renderer.display.draw(this.mesh, this.shaderProg);
  }

}