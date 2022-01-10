/**
 * Important note: 
 *   this code is not using VertexArrays since webgl don't (or barely) support them
 *   it fakes its behaviour instead
 */
export default class VertexArray
{
  constructor()
  {
  }
  setContext(gl)
  {
    /**
     * @type {WebGLRenderingContext}
     */
    this.gl = gl;
  }

  setWizard(wiz)
  {
    this.wiz = wiz;
  }

  assignId(id)
  {
    this.id = id;
  }

  bind()
  {
    if (this.wiz.vaoBound == this.id)
    {
      return;
    }

    this.wiz.vaoBound = this.id;
    this.buf.bind();
    var offset = 0;
    this.layout.elements.forEach((e, i) => {
      this.gl.vertexAttribPointer(i, e.count, e.type, e.normalized, this.layout.stride, offset);
      
      this.gl.enableVertexAttribArray(i);
      offset += e.count * this.layout.getElementTypeSize(e.type);

    });
  }

  unbind()
  {
    // No need
  }

  addBuffer(buf, layout)
  {
    this.layout = layout;
    this.buf = buf;
  }


}