
export default class Vector2
{
  
  /**
  * 2 Dimensional Vector
  * @module vec2
  */
  
  /**
  * Creates a new, empty vec2
  *
  * @returns {vec2} a new 2D vector
  */
  static create() {
    let out = new Float32Array(2);
    if(Float32Array != Float32Array) {
      out[0] = 0;
      out[1] = 0;
    }
    return out;
  }
  
  /**
  * Creates a new vec2 initialized with values from an existing vector
  *
  * @param {vec2} a vector to clone
  * @returns {vec2} a new 2D vector
  */
  static clone(a) {
    let out = new Float32Array(2);
    out[0] = a[0];
    out[1] = a[1];
    return out;
  }
  
  /**
  * Creates a new vec2 initialized with the given values
  *
  * @param {Number} x X component
  * @param {Number} y Y component
  * @returns {vec2} a new 2D vector
  */
  static fromValues(x, y) {
    let out = new Float32Array(2);
    out[0] = x;
    out[1] = y;
    return out;
  }
  
  /**
  * Copy the values from one vec2 to another
  *
  * @param {vec2} out the receiving vector
  * @param {vec2} a the source vector
  * @returns {vec2} out
  */
  static copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    return out;
  }
  
  /**
  * Set the components of a vec2 to the given values
  *
  * @param {vec2} out the receiving vector
  * @param {Number} x X component
  * @param {Number} y Y component
  * @returns {vec2} out
  */
  static set(out, x, y) {
    out[0] = x;
    out[1] = y;
    return out;
  }
  
  /**
  * Adds two vec2's
  *
  * @param {vec2} out the receiving vector
  * @param {vec2} a the first operand
  * @param {vec2} b the second operand
  * @returns {vec2} out
  */
  static add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    return out;
  }
  
  /**
  * Subtracts vector b from vector a
  *
  * @param {vec2} out the receiving vector
  * @param {vec2} a the first operand
  * @param {vec2} b the second operand
  * @returns {vec2} out
  */
  static subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    return out;
  }
  
  /**
  * Multiplies two vec2's
  *
  * @param {vec2} out the receiving vector
  * @param {vec2} a the first operand
  * @param {vec2} b the second operand
  * @returns {vec2} out
  */
  static multiply(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    return out;
  }
  
  /**
  * Divides two vec2's
  *
  * @param {vec2} out the receiving vector
  * @param {vec2} a the first operand
  * @param {vec2} b the second operand
  * @returns {vec2} out
  */
  static divide(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    return out;
  }
  
  /**
  * Math.ceil the components of a vec2
  *
  * @param {vec2} out the receiving vector
  * @param {vec2} a vector to ceil
  * @returns {vec2} out
  */
  static ceil(out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    return out;
  }
  
  /**
  * Math.floor the components of a vec2
  *
  * @param {vec2} out the receiving vector
  * @param {vec2} a vector to floor
  * @returns {vec2} out
  */
  static floor(out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    return out;
  }
  
  /**
  * Returns the minimum of two vec2's
  *
  * @param {vec2} out the receiving vector
  * @param {vec2} a the first operand
  * @param {vec2} b the second operand
  * @returns {vec2} out
  */
  static min(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    return out;
  }
  
  /**
  * Returns the maximum of two vec2's
  *
  * @param {vec2} out the receiving vector
  * @param {vec2} a the first operand
  * @param {vec2} b the second operand
  * @returns {vec2} out
  */
  static max(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    return out;
  }
  
  /**
  * Math.round the components of a vec2
  *
  * @param {vec2} out the receiving vector
  * @param {vec2} a vector to round
  * @returns {vec2} out
  */
  static round (out, a) {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    return out;
  }
  
  /**
  * Scales a vec2 by a scalar number
  *
  * @param {vec2} out the receiving vector
  * @param {vec2} a the vector to scale
  * @param {Number} b amount to scale the vector by
  * @returns {vec2} out
  */
  static scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    return out;
  }
  
  /**
  * Adds two vec2's after scaling the second operand by a scalar value
  *
  * @param {vec2} out the receiving vector
  * @param {vec2} a the first operand
  * @param {vec2} b the second operand
  * @param {Number} scale the amount to scale b by before adding
  * @returns {vec2} out
  */
  static scaleAndAdd(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    return out;
  }
  
  /**
  * Calculates the euclidian distance between two vec2's
  *
  * @param {vec2} a the first operand
  * @param {vec2} b the second operand
  * @returns {Number} distance between a and b
  */
  static distance(a, b) {
    var x = b[0] - a[0],
    y = b[1] - a[1];
    return Math.hypot(x, y);
  }
  
  /**
  * Calculates the squared euclidian distance between two vec2's
  *
  * @param {vec2} a the first operand
  * @param {vec2} b the second operand
  * @returns {Number} squared distance between a and b
  */
  static squaredDistance(a, b) {
    var x = b[0] - a[0],
    y = b[1] - a[1];
    return x*x + y*y;
  }
  
  /**
  * Calculates the length of a vec2
  *
  * @param {vec2} a vector to calculate length of
  * @returns {Number} length of a
  */
  static length(a) {
    var x = a[0],
    y = a[1];
    return Math.hypot(x, y);
  }
  
  /**
  * Calculates the squared length of a vec2
  *
  * @param {vec2} a vector to calculate squared length of
  * @returns {Number} squared length of a
  */
  static squaredLength (a) {
    var x = a[0],
    y = a[1];
    return x*x + y*y;
  }
  
  /**
  * Negates the components of a vec2
  *
  * @param {vec2} out the receiving vector
  * @param {vec2} a vector to negate
  * @returns {vec2} out
  */
  static negate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    return out;
  }
  
  /**
  * Returns the inverse of the components of a vec2
  *
  * @param {vec2} out the receiving vector
  * @param {vec2} a vector to invert
  * @returns {vec2} out
  */
  static inverse(out, a) {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    return out;
  }
  
  /**
  * Normalize a vec2
  *
  * @param {vec2} out the receiving vector
  * @param {vec2} a vector to normalize
  * @returns {vec2} out
  */
  static normalize(out, a) {
    var x = a[0],
    y = a[1];
    var len = x*x + y*y;
    if (len > 0) {
      //TODO: evaluate use of glm_invsqrt here?
      len = 1 / Math.sqrt(len);
    }    
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    return out;
  }
  
  /**
  * Calculates the dot product of two vec2's
  *
  * @param {vec2} a the first operand
  * @param {vec2} b the second operand
  * @returns {Number} dot product of a and b
  */
  static dot(a, b) {
    return a[0] * b[0] + a[1] * b[1];
  }
  
  /**
  * Computes the cross product of two vec2's
  * Note that the cross product must by definition produce a 3D vector
  *
  * @param {vec3} out the receiving vector
  * @param {vec2} a the first operand
  * @param {vec2} b the second operand
  * @returns {vec3} out
  */
  static cross(out, a, b) {
    var z = a[0] * b[1] - a[1] * b[0];
    out[0] = out[1] = 0;
    out[2] = z;
    return out;
  }
  
  /**
  * Performs a linear interpolation between two vec2's
  *
  * @param {vec2} out the receiving vector
  * @param {vec2} a the first operand
  * @param {vec2} b the second operand
  * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
  * @returns {vec2} out
  */
  static lerp(out, a, b, t) {
    var ax = a[0],
    ay = a[1];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    return out;
  }
  
  /**
  * Generates a random vector with the given scale
  *
  * @param {vec2} out the receiving vector
  * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
  * @returns {vec2} out
  */
  static random(out, scale) {
    scale = scale || 1.0;
    var r = Math.random() * 2.0 * Math.PI;
    out[0] = Math.cos(r) * scale;
    out[1] = Math.sin(r) * scale;
    return out;
  }
  
  /**
  * Transforms the vec2 with a mat2
  *
  * @param {vec2} out the receiving vector
  * @param {vec2} a the vector to transform
  * @param {mat2} m matrix to transform with
  * @returns {vec2} out
  */
  static transformMat2(out, a, m) {
    var x = a[0],
    y = a[1];
    out[0] = m[0] * x + m[2] * y;
    out[1] = m[1] * x + m[3] * y;
    return out;
  }
  
  /**
  * Transforms the vec2 with a mat2d
  *
  * @param {vec2} out the receiving vector
  * @param {vec2} a the vector to transform
  * @param {mat2d} m matrix to transform with
  * @returns {vec2} out
  */
  static transformMat2d(out, a, m) {
    var x = a[0],
    y = a[1];
    out[0] = m[0] * x + m[2] * y + m[4];
    out[1] = m[1] * x + m[3] * y + m[5];
    return out;
  }
  
  /**
  * Transforms the vec2 with a mat3
  * 3rd vector component is implicitly '1'
  *
  * @param {vec2} out the receiving vector
  * @param {vec2} a the vector to transform
  * @param {mat3} m matrix to transform with
  * @returns {vec2} out
  */
  static transformMat3(out, a, m) {
    var x = a[0],
    y = a[1];
    out[0] = m[0] * x + m[3] * y + m[6];
    out[1] = m[1] * x + m[4] * y + m[7];
    return out;
  }
  
  /**
  * Transforms the vec2 with a mat4
  * 3rd vector component is implicitly '0'
  * 4th vector component is implicitly '1'
  *
  * @param {vec2} out the receiving vector
  * @param {vec2} a the vector to transform
  * @param {mat4} m matrix to transform with
  * @returns {vec2} out
  */
  static transformMat4(out, a, m) {
    let x = a[0];
    let y = a[1];
    out[0] = m[0] * x + m[4] * y + m[12];
    out[1] = m[1] * x + m[5] * y + m[13];
    return out;
  }
  
  /**
  * Rotate a 2D vector
  * @param {vec2} out The receiving vec2
  * @param {vec2} a The vec2 point to rotate
  * @param {vec2} b The origin of the rotation
  * @param {Number} c The angle of rotation
  * @returns {vec2} out
  */
  static rotate(out, a, b, c) {
    //Translate point to the origin
    let p0 = a[0] - b[0],
    p1 = a[1] - b[1],
    sinC = Math.sin(c),
    cosC = Math.cos(c);
    
    //perform rotation and translate to correct position
    out[0] = p0*cosC - p1*sinC + b[0];
    out[1] = p0*sinC + p1*cosC + b[1];
    
    return out;
  }
  
  /**
  * Get the angle between two 2D vectors
  * @param {vec2} a The first operand
  * @param {vec2} b The second operand
  * @returns {Number} The angle in radians
  */
  static angle(a, b) {
    let x1 = a[0],
    y1 = a[1],
    x2 = b[0],
    y2 = b[1];
    
    let len1 = x1*x1 + y1*y1;
    if (len1 > 0) {
      //TODO: evaluate use of glm_invsqrt here?
      len1 = 1 / Math.sqrt(len1);
    }
    
    let len2 = x2*x2 + y2*y2;
    if (len2 > 0) {
      //TODO: evaluate use of glm_invsqrt here?
      len2 = 1 / Math.sqrt(len2);
    }
    
    let cosine = (x1 * x2 + y1 * y2) * len1 * len2;
    
    
    if(cosine > 1.0) {
      return 0;
    }
    else if(cosine < -1.0) {
      return Math.PI;
    } else {
      return Math.acos(cosine);
    }
  }
  
  /**
  * Set the components of a vec2 to zero
  *
  * @param {vec2} out the receiving vector
  * @returns {vec2} out
  */
  static zero(out) {
    out[0] = 0.0;
    out[1] = 0.0;
    return out;
  }
  
  /**
  * Returns a string representation of a vector
  *
  * @param {vec2} a vector to represent as a string
  * @returns {String} string representation of the vector
  */
  static str(a) {
    return 'vec2(' + a[0] + ', ' + a[1] + ')';
  }
  
  /**
  * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
  *
  * @param {vec2} a The first vector.
  * @param {vec2} b The second vector.
  * @returns {Boolean} True if the vectors are equal, false otherwise.
  */
  static exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1];
  }
  
  /**
  * Returns whether or not the vectors have approximately the same elements in the same position.
  *
  * @param {vec2} a The first vector.
  * @param {vec2} b The second vector.
  * @returns {Boolean} True if the vectors are equal, false otherwise.
  */
  
}