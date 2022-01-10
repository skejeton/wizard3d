import Game from "./game/Game";

// import RectShape from "./renderer/rectShape";
// import Renderer from "./renderer/renderer"
// import MiniMap from "./minimap/minimap";
// import Player from "./game/player";
// import BoxShape from "./renderer/boxShape";
// import { Matrix4 } from "./math/mat4";
// import Vector2 from "./math/vec2";
// import Camera3d from "./renderer/3dCamera";
// import RenderObject3d from "./renderer/renderObject";

// var mh = 9;
// var mw = 16;

// var arh = mh/mw;
// var arw = mw/mh;



// var mapw = 9;
// var maph = 9;

var canvas = document.getElementById("cv");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// var cam = new Camera3d();
// cam.translate(0, 0, 1);
// cam.rotate(0, 1, 0);



// var keys = {};

// onkeydown = onkeyup = function (e)
// {
//   keys[e.key] = e.type == "keydown";
// }

// var gl = canvas.getContext("webgl");


// var renderer = new Renderer(gl, canvas);
// renderer.camera = cam;

// canvas.onclick = () => {
//   canvas.requestPointerLock();
// }

// var movement = [0, 0];

// onmousemove = (e) => {
//   movement[0] = e.movementX;
//   movement[1] = e.movementY;

// }

// var identity = new Float32Array(16);



// var box = new BoxShape();
// box.setTexture()
// console.log(renderer.shapes.RECTANGLE_SHAPE);


// var minimap = new MiniMap(0, 0, 128, 128);

// var player = new Player(0.5, 0.5);

// minimap.setMap(map, mapw, maph);

// var objects = [
//   {x: 0.5, y: 0.5},
// ];

// var b = 0;
// var a = 0;

// map.split("").forEach((e, id) => {
//   var i = id%9;
//   var j = Math.floor(id/9);

//   if (e == "P")
//   {
//     player.x = -i;
//     player.y = -j;
//   }
// })

// minimap.setObjects(objects);

// renderer.clearColor(0, 0, 0, 1);

// setInterval(() => {
//   renderer.clear();
//   if (keys["w"])
//   {
//     var v = [0, 0];
//     Vector2.rotate(v, [0, -0.05], [0, 0], a)

//     player.move(v[0], v[1]);
//     b += 0.1;

//   }
//   if (keys["s"])
//   {

//     var v = [0, 0];
//     Vector2.rotate(v, [0, -0.05], [0, 0], a+Math.PI)

//     player.move(v[0], v[1]);
//   b += 0.1;

//   }
//   if (keys["a"])
//   {

//     var v = [0, 0];
//     Vector2.rotate(v, [0, -0.05], [0, 0], a-Math.PI/2)

//     player.move(v[0], v[1]);
//     b += 0.1;

//   }
//   if (keys["d"])
//   {

//     var v = [0, 0];
//     Vector2.rotate(v, [0, -0.05], [0, 0], a+Math.PI/2)

//     player.move(v[0], v[1]);
//   b += 0.1;

//   }

//   a += movement[0]/200;
//   player.update();

//   cam.reset();
//   cam.translate(player.x, 0, player.y);
//   cam.rotate(0, a, 0);



//   map.split("").forEach((e, id) => {
//     if (map[id] != "#") return;
//     var i = id%9;
//     var j = Math.floor(id/9);

//     box.translate(i, 0, j);
//     renderer.draw(box);

//   })

//   movement = [0, 0];

//   objects[0] = player.getMapCoords(mapw, maph);

//   renderer.draw(minimap);  

// }, 1000/30)


var lastDate = Date.now();
var nextDate;

var game = new Game(canvas);

game.onready = () => {
  setInterval(() => {
    nextDate = Date.now();
    var dt = nextDate-lastDate;
    lastDate = nextDate;
    game.update(dt);
  }, 1000/60);
}

