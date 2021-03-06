/*
    @author Luke
*/

var surface = new GraphicsSurface("Simplex 2D", Size(800, 600));

var scale = 64;
var inst = new Simplex();
var rot = 0;

var res = 512;
var octives = 16;

var text = new GraphicsText("", Font("Arial", 12), surface);
text.text = "Scale: " + scale + "\nOctives: " + octives;

surface.renderTime.connect(function(lag) {
    if(lag > 1.05)
        scale*=1.05;
    else if(lag < 0.95)
        scale*=0.95;
    if(scale > 14)
        octives *= 0.95;
    if(scale < 8)
        octives *= 1.05;
    text.text = "Scale: " + Math.round(scale*10)/10 + "\nOctives: " + Math.round(octives*10)/10;
});

surface.paint.connect(function(p){
    var mod;
    var nois;
    var resmod;
    var modmod = .7;
    for(var xoc = 0; xoc < surface.width/2; xoc+=scale){
        for(var yoc = 0; yoc < surface.height/2; yoc+=scale){

            nois = 1;
            resmod = res;
            mod = .6;

            for(var i = 0; i < octives; i++){
                nois += inst.noise2D((xoc+rot+1024)/resmod, (yoc+2048)/resmod)*mod;
                mod *= modmod;
                resmod *= modmod;
            }

            nois = 1+nois;
            nois *= 128;

            p.fillRect(Rect(xoc+nois-4,yoc+nois-4, scale, scale), Rgba(0, 0, 255, 80));
        }
    }
});

engine.tick.connect(function() {
    surface.repaint();
    rot+=2;
});

surface.connected.connect(function(){
    surface.animate("background", "white");
});
