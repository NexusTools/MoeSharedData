var surface = new GraphicsSurface("OpenGL Cube", Size(800, 600), GraphicsSurface.GLWidget);
surface.background = Rgb(0, 110, 160);

if(!surface.hasOpenGL())
    throw "OpenGL Support Required: " + surface.lastOpenGLError();

var glView = new GLGraphicsView(surface);
glView.camZ = -200;

var glScene = new GLScene();
glView.setScene(glScene);

var glCube = new GLCubeModel();
glScene.addModel(glCube);

surface.connected.connect(function() {
    engine.tick.connect(function() {
        glCube.rotate(0, 1, 0.2);
        if(glView.camZ < -8) {
            glView.camZ += (-7.9 - glView.camZ)/24;
            if(glView.camZ > -8)
                glView.camZ = -8;
        }
    });
});

surface.resized.connect(glView.setSize);

