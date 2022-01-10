precision mediump float;

attribute vec2 vertexPosition;
// Rectangle color
uniform vec4 u_Color;
// Homogenous matrix
uniform mat3 affine;
varying vec4 color;

void main()
{
  color = u_Color;
  gl_Position = vec4(affine * vec3(vertexPosition, 1.0), 1);
}