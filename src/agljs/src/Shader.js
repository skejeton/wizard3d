
export default class Shader
{
  constructor(type)
  {
    this.types = {
      Vertex: 0,
      Fragment: 1
    };
    
    this.type = type;
  }

  setContext(gl)
  {
    /**
     * @type {WebGLRenderingContext}
     */
    this.gl = gl;
  }

  toGLType(type)
  {
    switch (type)
    {
      case this.types.Vertex:
        return this.gl.VERTEX_SHADER;
        break;
      case this.types.Fragment:
        return this.gl.FRAGMENT_SHADER;
        break;
    }
    throw `AGL: Unknown shader type ${type}`
  }

  typeString(type)
  {
    switch (type)
    {
      case this.types.Vertex:
        return "vertex";
        break;
      case this.types.Fragment:
        return "fragment";
        break;
    }
    throw `AGL: Unknown shader type ${type}`
  }
  
  compile(src)
  {
    this.shaderId = this.gl.createShader(this.toGLType(this.type));
    this.gl.shaderSource(this.shaderId, src);
    this.gl.compileShader(this.shaderId);

    if (!this.gl.getShaderParameter(this.shaderId, this.gl.COMPILE_STATUS))
    {
      var msg;
      msg = this.gl.getShaderInfoLog(this.shaderId);

      throw `AGL: Error compiling ${this.typeString(this.type)} shader: ${msg}`;
    }
  }

  destruct()
  {
    this.gl.deleteShader(this.shaderId);
  }
}
