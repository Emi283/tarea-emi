//aqui van las variables
var bloquesin;
 var raqueta;
  var raqueta2;
  var mitad;
   var edges;
 function setup() {//setup=configuracion
  createCanvas(1350, 620);//area de trabajo
 bloquesin=createSprite(900,300,50,50);//variablenombre=createSprite(x,y,ancho,alto)
 bloquesin.shapeColor="darkgray";
 raqueta2=createSprite(40,200,50,200);
raqueta=createSprite(1300,350,50,200);
mitad=createSprite(675,310,20,1000);
bloquesin.scale=1;
bloquesin.velocityX=3;
bloquesin.velocityY=5;

edges=createEdgeSprites();

raqueta.velocityX=0;
raqueta.velocityY=-3;

raqueta2.velocityX=0;
raqueta2.velocityY=-3;

} 
function draw() {//draw=dibujar
  // Rellena el lienzo con un gris claro, cubriendo las imágenes previas
  background("black");//fondo
  drawSprites();

 // bloquesin.y=bloquesin.y-4;

  bloquesin.bounceOff(edges[0]);
  bloquesin.bounceOff(edges[1]);
  bloquesin.bounceOff(edges[2]);
   bloquesin.bounceOff(edges[3]);
 
   raqueta.bounceOff(edges[0]);
   raqueta.bounceOff(edges[1]);
   raqueta.bounceOff(edges[2]);
   raqueta.bounceOff(edges[3]);

   raqueta2.bounceOff(edges[0]);
   raqueta2.bounceOff(edges[1]);
   raqueta2.bounceOff(edges[2]);
   raqueta2.bounceOff(edges[3]);
}
