export default class Display
{
  setContext(gl)
  {
    /**
     * @type {WebGLRenderingContext}
     */
    this.gl = gl;

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  }
  draw(mesh, shaderprog)
  {

    shaderprog.bind();
    mesh.bind();
    this.gl.drawElements(this.gl.TRIANGLES, mesh.getIndicesLength(), this.gl.UNSIGNED_SHORT, 0);
  }
  render(drawable, shaderprog)
  {
    drawable.draw(this, shaderprog);
  }
  clearColor(r, g, b, a)
  {
    this.gl.clearColor(r, g, b, a);
  }
  clear()
  {
    this.gl.clear(this.gl.DEPTH_BUFFER_BIT | this.gl.COLOR_BUFFER_BIT);
  }
  enableCulling(cond = 1)
  {
    if (cond)
    {
      this.gl.enable(this.gl.DEPTH_TEST);
      this.gl.enable(this.gl.CULL_FACE);
      this.gl.frontFace(this.gl.CCW);
      this.gl.cullFace(this.gl.BACK);
    }
    else
    {
      this.gl.disable(this.gl.DEPTH_TEST);
      this.gl.disable(this.gl.CULL_FACE);
    }
  }
}