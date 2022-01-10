export default class VertexBuffer
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
    this.vbo = this.gl.createBuffer();

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vbo);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, data, this.gl.STATIC_DRAW);
  }

  destruct()
  {
    this.gl.deleteBuffer(this.vbo);
  }

  bind()
  {
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vbo);
  }

  unbind()
  {
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, 0);
  }
}