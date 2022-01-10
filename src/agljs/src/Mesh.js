import VertexArray from "./VertexArray";
import IndexBuffer from "./IndexBuffer";
import Texture from "./Texture";
import BufferLayout from "./BufferLayout";
import VertexBuffer from "./VertexBuffer";

export default class Mesh
{
  constructor(vao = null, ibo = null)
  {
    this.create(vao, ibo)
  }

  create(vao, ibo)
  {
    this.vao = vao;
    this.ibo = ibo;
  }

  /**
   * 
   * @param {AGLWizard} wiz 
   */
  setWizard(wiz)
  {
    this.wiz = wiz;
  }

  createFromObject(obj)
  {
    var layout = new BufferLayout();
    layout.setContext(this.gl);

    obj.layout.forEach((e) => {
      if (e[0] == "float")
      {
        layout.addFloat(e[1]);
      }
      else if (e[0] == "normalized float")
      {
        layout.addFloat(e[1], true);
      }
      else if (e[0] == "uint" || e[0] == "unsigned int")
      {
        layout.addUint(e[1]);
      }
      else if (e[0] == "uchar" || e[0] == "unsigned char")
      {
        layout.addUchar(e[1]);
      }
      else
      {
        throw `AGL: uncaught layout element type: ${e[0]}, avalible types: float, uint | unsigned int, uchar | unsigned char`
      }
    })
 
    var vbo = this.wiz.createVertexBuffer();
    vbo.createBuffer(new Float32Array(obj.buffer));
    



    this.vao = this.wiz.createVertexArray();
    this.ibo = this.wiz.createIndexBuffer();
    this.vao.setContext(this.gl);
    this.ibo.setContext(this.gl);
    
    this.ibo.createBuffer(new Uint16Array(obj.indices));
    this.vao.addBuffer(vbo, layout);

    this.indicesLength = obj.indices.length;



  }

  setContext(gl)
  {
    this.gl = gl;
  }

  setTexture(tex)
  {
    this.tex = tex;

  }

  getIndicesLength()
  {
    return this.indicesLength;
  }

  bind()
  {
    this.vao.bind();
    this.ibo.bind();
    if (this.tex !== undefined)
    {
      this.tex.bind();
    }
  }

  unbind()
  {
    this.vao.unbind();
    this.ibo.unbind();
  }

  destruct()
  {
    this.vao.destruct();
    this.ibo.destruct(); 
    if (this.tex !== undefined)
    {
      this.tex.destruct();
    }

    delete this.vao;
    delete this.ibo;
    if (this.tex !== undefined)
    {
      delete this.tex;
    }
  }
}