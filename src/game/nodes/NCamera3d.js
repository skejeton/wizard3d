import Camera3d from "../renderer/3dCamera";
import Node from "./node";

export default class NCamera3d extends Node
{
  constructor()
  {
    super();
    this.camera = new Camera3d();
  }

  update()
  {
    
  }
}

