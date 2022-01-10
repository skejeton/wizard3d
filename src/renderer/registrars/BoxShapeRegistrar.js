import shapeObj from "../../bundle_resources/cubeMesh.json"
import vertexShader from "../../shaders/3dmesh.vert.glsl";
import fragmentShader from "../../shaders/3dmesh.frag.glsl";
import { Matrix4 } from "../../math/mat4.js";


export default class BoxShapeRegistrar
{
  static register(obj, wiz)
  {
    var mesh = wiz.createMesh();
    var shaderprog = wiz.createShaderProgram();
    var vsh = wiz.createShader(0);
    var fsh = wiz.createShader(1);
    
    vsh.compile(vertexShader);
    fsh.compile(fragmentShader);
    
    shaderprog.attachShader(vsh);
    shaderprog.attachShader(fsh);
    
    mesh.createFromObject(shapeObj);
    
    
    
    
    
    
    shaderprog.link();
    
    shaderprog.bind();
    
    
    
    obj.BOX_SHAPE = {};
    
    obj.BOX_SHAPE.mesh = mesh;
    obj.BOX_SHAPE.shaderProg = shaderprog; 
    
    
  }
}