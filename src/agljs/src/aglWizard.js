import agl from "./agl";

export default class AGLWizard
{
  constructor(gl = null)
  {
    this.gl = gl;
    this.vaoBound = null;
    this.lastVaoId = 0;
  }

  setContext(gl)
  {
    this.gl = gl;
  }
  
  createBufferLayout()
  {
    var layout = new agl.BufferLayout();
    layout.setContext(this.gl);

    return layout;
  }

  createMesh(vao = null, ibo = null)
  {
    var mesh = new agl.Mesh(vao, ibo);
    mesh.setContext(this.gl);
    mesh.setWizard(this);

    return mesh;
  }

  createDisplay()
  {

    var disp = new agl.Display();
    disp.setContext(this.gl);

    return disp;
  }

  createIndexBuffer()
  {

    var ibo = new agl.IndexBuffer();
    ibo.setContext(this.gl);

    return ibo;
  }

  createShader(type)
  {

    var shader = new agl.Shader(type);
    shader.setContext(this.gl);

    return shader;
  }

  createShaderProgram()
  {

    var sprog = new agl.ShaderProgram();
    sprog.setContext(this.gl);
    sprog.create();

    return sprog;
  }

  createTexture()
  {

    var texture = new agl.Texture();
    texture.setContext(this.gl);

    return texture;
  }

  createVertexArray()
  {

    var vao = new agl.VertexArray();
    vao.setContext(this.gl);
    vao.setWizard(this);
    vao.assignId(this.lastVaoId);
    this.lastVaoId++;

    return vao;
  }

  createVertexBuffer()
  {

    var vbo = new agl.VertexBuffer();
    vbo.setContext(this.gl);

    return vbo;
  }
}