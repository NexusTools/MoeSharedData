varying lowp vec3 vCol;

void main(void) {
	gl_FragColor = vec4(vCol.rgb, 1);
}
