export default class BufferLayout
{
  constructor()
  {
    this.elements = [];
    this.stride = 0;
  }
  
  setContext(gl)
  {
    /**
     * @type {WebGLRenderingContext}
     */
    this.gl = gl;
  }

  getElementTypeSize(type)
  {
    switch (type)
    {
      case this.gl.FLOAT:
        return Float32Array.BYTES_PER_ELEMENT;
        break;
      case this.gl.UNSIGNED_INT:
        return Uint32Array.BYTES_PER_ELEMENT;
        break;
      case this.gl.UNSIGNED_BYTE:
        return Uint8Array.BYTES_PER_ELEMENT;
        break;
    }

    throw `AGL: Unknown buffer element type ${type}`
  }

  addFloat(count, norm = false)
  {
    this.elements.push({
      type: this.gl.FLOAT,
      count: count,
      normalized: norm
    });

    var offset = 0;
    this.elements.forEach((e, i) => {
      offset += e.count * i;
      
    })

    this.stride += count * Float32Array.BYTES_PER_ELEMENT;
  }

  addUint(count)
  {
    this.elements.push({
      type: this.gl.UNSIGNED_INT,
      count: count,
      normalized: false
    });

    this.stride += count * Uint32Array.BYTES_PER_ELEMENT;
  }


  addUchar(count)
  {
    this.elements.push({
      type: this.gl.UNSIGNED_BYTE,
      count: count,
      normalized: false
    });

    this.stride += count * Uint8Array.BYTES_PER_ELEMENT;
  }
}