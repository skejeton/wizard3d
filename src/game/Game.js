import AssetLoader from "./AssetLoader";
import Renderer from "../renderer/Renderer";
import RenderObject from "../renderer/RenderObject";
import InputHandler from "./InputHandler";
import Camera3d from "../renderer/3dCamera";
import { Matrix4 } from "../math/mat4";
import Mesh from "../agljs/src/Mesh";
import NMesh3d from "./nodes/NMesh3d";
import NodeSystem from "./nodes/core/NodeSystem";

export default class Game
{
  preInit()
  {

  }

  constructor(canvas)
  {
     //#region GameInit

    this.canvas = canvas;
    this.gl = canvas.getContext("webgl");
    this.canvas.onclick = () => {this.canvas.requestPointerLock()};
    this.handler = new InputHandler();
    this.counter = document.createElement("p");
    this.counter.style.fontFamily = "PxPlus IBM VGA9";
    this.counter.style.fontSize = "32px";
    this.counter.style.bottom = "10px";
    this.counter.style.right = "50px";
    this.counter.style.position = "absolute";
    this.counter.style.color = "white";
    document.body.appendChild(this.counter);
    this.onready = () => {};    
    //#endregion 
    this.init();

  }

  init()
  {
    this.loader = new AssetLoader();

    this.loader.texture2d(
      "./resources/meshes/monkey2/Untitled.png", 
      "res://textures/monkey.tex");
    this.loader.raw(
      "./resources/meshes/monkey.json", 
      "res://models/monkey.obj");
    this.loader.prog(
      "./resources/shaders/3dmesh.vert.glsl",
      "./resources/shaders/3dmesh.frag.glsl", 
      "res://shaders/generic_3d.prog");
 
    this.loader.load(() => {
      this.postInit();
      this.onready();
    }, this.gl);    
    this.renderer = new Renderer(this.gl, this.canvas);
    this.camera = new Camera3d();
    this.camera.translate(0, 0, 4);
    this.renderer.camera = this.camera;

    var n = new Node();
    this.nodeSystem = new NodeSystem(n);
  }

  postInit()
  {
    this.nodeSystem.
    this.mesh = this.createNode(NMesh3d);
    this.mesh.fromJSON(this.loader.give("res://models/monkey.obj"));

    this.renderer.clearColor(0.0, 0.0, 1.0, 1.0);
    this.mesh.ro.rotate(-Math.PI/2, 0, Math.PI);
  }

  createNode(obj)
  {
    var o = new obj();
    o.setGame(this);
    return o;
  }
  
  update(dt)
  {
    this.counter.innerText = Math.floor(1000/dt);
    this.mesh.ro.rotate(0, 0, 0.01);
    this.draw();
  }

  draw()
  {
    this.renderer.clear();
    this.renderer.draw(this.mesh.ro);
  }
}