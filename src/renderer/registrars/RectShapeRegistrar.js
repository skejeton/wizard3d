import rectShapeObj from "../../bundle_resources/rectMesh.json"
import rectVertexShader from "../../shaders/rect.vert.glsl";
import rectFragmentShader from "../../shaders/rect.frag.glsl";


export default class RectShapeRegistrar
{
  static register(obj, wiz)
  {
    var mesh = wiz.createMesh();
    var shaderprog = wiz.createShaderProgram();
    var vsh = wiz.createShader(0);
    var fsh = wiz.createShader(1);
    
    vsh.compile(rectVertexShader);
    fsh.compile(rectFragmentShader);
    
    shaderprog.attachShader(vsh);
    shaderprog.attachShader(fsh);

    mesh.createFromObject(rectShapeObj);

    shaderprog.link();

    obj.RECTANGLE_SHAPE = {};

    obj.RECTANGLE_SHAPE.mesh = mesh;
    obj.RECTANGLE_SHAPE.shaderProg = shaderprog; 

  }
}