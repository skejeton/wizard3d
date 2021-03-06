var img = new Image();
img.src = '';


var assetSources = [
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH4wQZFgEaeEdqoAAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAJTSURBVDjLfZFPSJNxGMc/794Fiv+2lPdF35dtvVvNQ7gUIVFYXgysQ1BkEQjdgtGxi6fs0M2zEF2EoEt08JKIRKYhRTS3DtJcvm6LMd+hbSqjdWi/DvN9cSL+Ls/v93x/3+d5vs9Xuh7rFUNjQQA+L21x/G6fs3CX/ckGDaOt4eNZ+OURHWkueV8AmOYhhtHG6xcJhsaCDYST+INHV5yc6yTo/lRyxk7NpE8lm+YhAN+exnEtxOIYRhumeYg3WWPw2SCpmTSpmTThJxc5idvF3kx+5O6ra3UJC7E4AOOzA3WC1kUmb1FDxtC6MPO7Dr4Y+0oNmfHZAV7eXkK6N3JJuPhHQFPJ5C0nPrwxDMDcuzUCmlqXkt/F0Lr4/mObGjIHlT/Ij29dnZZkdwPZ36MghCBpFugL6exXqvgUDy7ZRSZvETZ0qn+rdLQ2IU1NDAvbqtFI3TqzsEeuWHYs9CkeslYJSZIAyOQtov1hslYJt93Zp3gwC3tsSEF219eI9ofJFcv4FA+5Yhm/6sXo7gRgGZycNDUxLOyKx7vanWxZAP4eBb/qhaMCANLi80kBsJzcOlWG/f6Q+OlIAGgfuMNB/C2y3tkyLYQguZmlL6Qzv5ogkf4FLhlJkqgJwfxqgkhIp6Olif1KldFIkG6xw/bOb9x+1cvKeopof9iJuWLZGRtoyAU0FbOwR9Yqcb5ZRm4/V5sOaCoifJPmSs6xTJLdeNpb8SkeVtZT9IV0Z6rkZpZISGfpywZue0lR5T0HR4uzrbOXZVvmV71krRIBTa0X7b3Af/j4POwene3xAAAAAElFTkSuQmCC"
]

var assets = [];

import AGLWizard from "./aglWizard";



function assetLoader(assetSources, assets)
{
  assetSources.forEach(function(e) {
    var asset = new Image();
    asset.src = e;
    var lock = true;
    asset.onload = function() { lock = false; }
    while(!lock);
    assets.push(asset);
  });
}

assetLoader(assetSources, assets);

var canvas = document.getElementById("canvas");
canvas.width = 500;
canvas.height = 500;
/**
* @type {WebGLRenderingContext}
*/
var gl = canvas.getContext("webgl");

var wizard = new AGLWizard(gl);

var display = wizard.createDisplay();

var drawObj = {
  buffer: [
    // X    Y    U    V
    -0.5, -0.5, 0, 0,
    0.5, -0.5, 0, 1,
    0.5, 0.5, 1, 1,
    -0.5, 0.5, 1, 0,
  ],
  indices: [
    0, 1, 2,
    2, 3, 0
  ],
  layout: [
    ["float", 2], // x y
    ["float", 2], // u v
  ]
}

var mesh = wizard.createMesh();


mesh.createFromObject(drawObj);

console.log(mesh);


var vertex = wizard.createShader(0);
var fragment = wizard.createShader(1);

var prog = wizard.createShaderProgram();


vertex.compile(`
  precision mediump float;
  attribute vec2 position;
  attribute vec2 uv;
  varying vec2 uv_frag;
  uniform float rotation;

  void main()
  {
    uv_frag = uv;
    
    
    vec4 posr = vec4(position, 0, 1.0);
    mat4 rotmat;
    rotmat[0] = vec4(cos(rotation), -sin(rotation), 0, 0);
    rotmat[1] = vec4(sin(rotation),  cos(rotation), 0, 0);
    rotmat[2] = vec4(0,              0,             1, 0);
    rotmat[3] = vec4(0,              0,             0, 1);
    posr *= rotmat;
    
    
    gl_Position = posr;
  }
`);
fragment.compile(`
  precision mediump float;

  varying vec2 uv_frag;

  uniform sampler2D tex_sampler;

  void main()
  {
    gl_FragColor = texture2D(tex_sampler, uv_frag);
  }
`)
// #endregion

prog.createFrom(vertex, fragment);

var texture = wizard.createTexture();
texture.fromImage(assets[0]);

mesh.setTexture(texture);

var rotation = 0;
display.clearColor(0, 0, 0, 1);
prog.bind();
display.enableCulling(true);


var mainLoop = () => {
  prog.setUniform1f("rotation", rotation);
  rotation += 0.01;
  display.clear();
  display.draw(mesh, prog);
}

setInterval(mainLoop, 10);
