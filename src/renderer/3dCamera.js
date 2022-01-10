import { Matrix4 } from "../math/mat4";
import Object3d from "./Object3d";

export default class Camera3d extends Object3d
{
  constructor()
  {
    super();
    this.projection = new Float32Array(16);
    this.view = new Float32Array(16);
    
    this.setCameraPerspective(Math.PI/2, window.innerWidth/window.innerHeight, 0.1, 100);
    this.setCameraView([0, 0, -0.01], [0, 0, 0], [0, 1, 0]); 
  }

  
  passUniforms(shaderProgram, obj, viewName = "view", projectionName = "projection", worldName = "world")
  {
    shaderProgram.bind(); 
    shaderProgram.setUniformMatrix4f(viewName, this.view);
    shaderProgram.setUniformMatrix4f(projectionName, this.projection);
    shaderProgram.setUniformMatrix4f(worldName, this.mergeMatrix(obj));
  }

  chageFov(fov)
  {
    this.setCameraPerspective(fov, this.aspect, this.near, this.far);
  }

  setCameraPerspective(fov, aspect, near, far)
  {
    this.fov = fov;
    this.aspect = aspect;
    this.near = near;
    this.far = far;
    Matrix4.perspective(this.projection, fov, aspect, near, far);
  }


  setCameraView(eye, center, up)
  {
    this.eye = eye;
    this.center = center;
    this.up = up;

    Matrix4.lookAt(this.view, eye, center, up);
  }
}