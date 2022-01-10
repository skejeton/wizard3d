import NDrawable from "./NDrawable";
import RenderObject from "../../renderer/RenderObject";

export default class NMesh3d extends NDrawable
{
  static interleaveVertices(sources, spec) {
    const vertices = [];
    while (sources[0].length > 0) {
      for (let i = 0; i < spec.length; i++) {
        Array.prototype.push.apply(vertices, sources[i].splice(0, spec[i]));
      }
    }
    return { vertices: vertices};
  }
  static arrayChangeDimensions2d1d(array)
  {
    var newArr = [];
    for(var i = 0; i < array.length; i++)
    {
      for (var j = 0; j < array[i].length; j++)
      {
        newArr.push(array[i][j]);
      }
    }
    return newArr;

  }

  fromJSON(mesh)
  {
    var object = {
      buffer: [],
      indices: [],
      layout: [
        ["float", 3],
        ["normalized float", 3],
        ["float", 2]
      ]
    }
    var meshes = mesh.meshes;
    object.buffer = NMesh3d.interleaveVertices([meshes[0].vertices, meshes[0].normals, meshes[0].texturecoords[0]], [3, 3, 2]).vertices;
    object.indices = NMesh3d.arrayChangeDimensions2d1d(meshes[0].faces);
    var mesh = this.game.renderer.wiz.createMesh();
    mesh.createFromObject(object);


    
    var shaderprog = this.game.loader.give("res://shaders/generic_3d.prog");
    this.mesh = mesh;
    this.ro = new RenderObject();
    this.ro.setShaderProg(shaderprog);
    this.ro.setMesh(mesh);
    this.ro.predraw = (renderer) => {
      
      // this.ro.shaderProg.bind();
      // this.ro.shaderProg.setUniform1i("_sampler", 0);
      renderer.camera.passUniforms(this.ro.shaderProg, this.ro.calculateMatrix());
    }

    
  }
  
  constructor()
  {
    super();
  }

  update()
  {

  }

  draw(renderer)
  {
    renderer.draw(this.ro);
  }
}

