varying highp vec2 vTexCoord;
varying lowp vec3 vCol;

uniform sampler2D texture;

void main(void) {
	highp vec4 texelColor = texture2D(texture, vec2(vTexCoord.s, vTexCoord.t));

	gl_FragColor = vec4(texelColor.rgb * vCol, texelColor.a);
}
