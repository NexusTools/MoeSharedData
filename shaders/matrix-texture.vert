attribute highp vec3 vertexPosition;
attribute lowp vec3 vertexColour;
attribute highp vec2 texCoord;

uniform highp mat4 modelMatrix;
uniform highp mat4 matrix;

varying highp vec2 vTexCoord;
varying lowp vec3 vCol;

void main(void) {
	gl_Position = matrix * modelMatrix * vec4(vertexPosition, 1);
	vCol = vec3(vertexColour) * vec3((0.5 + normalize(gl_Position.xyz)*0.5)/1.0);
	vTexCoord = texCoord;
}
