export default class Texture
{
  constructor ()
  {
    this.texId = 0;
  }
  setContext(gl)
  {
    /**
     * @type {WebGLRenderingContext}
     */
    this.gl = gl;
  }

  fromImage(img)
  {
    this.texId = this.gl.createTexture();
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.texId);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST);
  
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);

    
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
    
    this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, img);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.texId);
  
  }

  bind(slot = 0)
  {
    this.gl.activeTexture(this.gl.TEXTURE0+slot);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.texId);
  }

  destruct()
  {
    this.gl.deleteTexture(this.texId);
  }
}

