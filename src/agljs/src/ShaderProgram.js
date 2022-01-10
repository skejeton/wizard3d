export default class ShaderProgram
{
  
  constructor()
  {
    this.ufCache = [];
  }
  
  setContext(gl)
  {
    /**
    * @type {WebGLRenderingContext}
    */
    this.gl = gl;
  }
  
  create()
  {
    this.progid = this.gl.createProgram();
  }
  
  createFrom(vertex, fragment)
  {
    this.create();
    this.attachShader(vertex);
    this.attachShader(fragment);
    this.link();
  }

  destruct()
  {
    this.gl.deleteProgram(this.progid);
  }
  
  bind()
  {
    this.gl.useProgram(this.progid);
  }
  
  unbind()
  {
    this.gl.useProgram(0);
  }
  
  attachShader(shader)
  {
    this.gl.attachShader(this.progid, shader.shaderId);
  }
  
  link()
  {  
    this.gl.linkProgram(this.progid);
    if (!this.gl.getProgramParameter(this.progid, this.gl.LINK_STATUS))
    {
      throw "AGL: Error linking program";
    }
    
    this.gl.validateProgram(this.progid);
    if (!this.gl.getProgramParameter(this.progid, this.gl.VALIDATE_STATUS))
    {
      throw "AGL: Error validating program";
    }
  }
  
  getUniformLocation(name)
  {
    var uc = this.ufCache[name];
    if (uc !== undefined)
    {
      return uc;
    }
    
    var loc = this.gl.getUniformLocation(this.progid, name);
    if (loc !== -1)
    {
      this.ufCache[name] = loc;
      return this.ufCache[name];
    }

    return loc;
  }

  getSafeUniformLocation(name)
  {
    var loc = this.getUniformLocation(name);
    if (loc == -1) throw "AGL: Cannot find uniform, it's either not used or not declared";
    return loc; 
  }

  setUniform1i(name, x)
  {
    var loc = this.getSafeUniformLocation(name);

    this.gl.uniform1i(loc, x);
  }


  setUniform1f(name, x)
  {
    var loc = this.getSafeUniformLocation(name);

    this.gl.uniform1f(loc, x);
  }

  setUniform2f(name, x, y)
  {
    var loc = this.getSafeUniformLocation(name);

    this.gl.uniform2f(loc, x, y);
  }

  setUniform3f(name, x, y, z)
  {
    var loc = this.getSafeUniformLocation(name);

    this.gl.uniform3f(loc, x, y, z);
  }

  setUniform4f(name, x, y, z, w)
  {
    var loc = this.getSafeUniformLocation(name);

    this.gl.uniform4f(loc, x, y, z, w);
  }

  setUniformMatrix2f(name, values, transpose = false)
  {
    var loc = this.getSafeUniformLocation(name);

    this.gl.uniformMatrix2fv(loc, transpose, values);  
  }

  setUniformMatrix3f(name, values, transpose = false)
  {
    var loc = this.getSafeUniformLocation(name);

    this.gl.uniformMatrix3fv(loc, transpose, values);  
  }

  setUniformMatrix4f(name, values, transpose = false)
  {
    var loc = this.getSafeUniformLocation(name);

    this.gl.uniformMatrix4fv(loc, transpose, values);  
  }
}