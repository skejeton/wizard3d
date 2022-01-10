import { Matrix4 } from "../math/mat4";

export default class Object3d
{
  constructor()
  {
    this.reset();
  }

  calculateMatrix()
  {
    var world = new Float32Array(16);
    
    Matrix4.identity(world);
    
    Matrix4.translate(world, world, this.pivot);
    // Matrix4.scale(world, world, this.size);
    Matrix4.rotateX(world, world, this.rotation[0]);
    Matrix4.rotateY(world, world, this.rotation[1]);
    Matrix4.rotateZ(world, world, this.rotation[2]);
    Matrix4.translate(world, world, [-this.pivot[0], -this.pivot[1], -this.pivot[2]]);

    Matrix4.translate(world, world, this.position);


    return world;
  }

  mergeMatrix(mat)
  {
    var world = new Float32Array(16);

    return Matrix4.multiply(world, this.calculateMatrix(), mat);
  
  }
  
  reset()
  {
    this.position = new Float32Array(3);
    this.rotation = new Float32Array(3);
    this.size = new Float32Array(3);
    this.pivot = new Float32Array(3);
  }

  rotate(x, y, z)
  {
    this.rotation[0] += x;
    this.rotation[1] += y;
    this.rotation[2] += z;
  }

  scale(x, y, z)
  {
    this.size[0] += x;
    this.size[1] += y;
    this.size[2] += z;
  }

  translate(x, y, z)
  {
    this.position[0] += x;
    this.position[1] += y;
    this.position[2] += z;

  }
}