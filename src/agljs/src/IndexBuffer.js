export default class IndexBuffer
{
  setContext(gl)
  {
    /**
     * @type {WebGLRenderingContext}
     */
    this.gl = gl;
  }

  constructor()
  {
  }


  createBuffer(data)
  {
    this.ibo = this.gl.createBuffer();

    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.ibo);
    this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, data, this.gl.STATIC_DRAW);
  }

  destruct()
  {
    this.gl.deleteBuffer(this.ibo);
  }

  bind()
  {
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.ibo);
  }

  unbind()
  {
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, 0);
  }
}