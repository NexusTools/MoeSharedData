/*
    @author Luke
*/

var surface = new GraphicsSurface("Simplex 2D", Size(800, 600));

var inst = new Simplex();
var rot = 0;

surface.paint.connect(function(p){
    for(var xoc = 0; xoc < surface.width/2; xoc+=8){
        for(var yoc = 0; yoc < surface.height/2; yoc+=8){

            var nois = inst.noise2D((xoc+1024+rot)/256.0, (yoc+2048)/256.0);
            nois *= 126;
            nois += 128;

            p.fillRect(Rect(xoc+nois-4,yoc+nois-4, 8, 8), Rgba(0, 0, 255, 80));
        }
    }
});

engine.tick.connect(function() {
    surface.repaint();
    rot++;
});

surface.connected.connect(function(){
    surface.animate("background", "white");
});
