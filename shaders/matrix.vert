attribute highp vec3 vertexPosition;
attribute lowp vec3 vertexColour;
uniform highp mat4 modelMatrix;
uniform highp mat4 matrix;
varying lowp vec4 vCol;

void main(void) {
	vCol = vec4(vertexColour, 1);
	gl_Position = matrix * modelMatrix * vec4(vertexPosition, 1);
}
