var wall,wall1,wall2,Villian,villian1;
var villianImg,villian1Img;
function preload() {
villian1Img=loadImage("IMAGES/")
villianImg=loadImage("IMAGES/")



}


function setup() {
  createCanvas(800,400);
 wall = createSprite(160,84,320,10)
 wall1 = createSprite(250,164,320,10);
 wall2 = createSprite(90,250,10,180);
 Villian = createSprite(44,211);
 villian1 = createSprite(230,123);    

Villian.addImage(villianImg);
Villian.scale=0.2;

villian1.addImage(villian1Img);
villian1.scale=0.17;


Villian.velocityY=-0.9;
}

function draw() {
  background(0,0,0);  
   edges=createEdgeSprites();
    
    if (Villian.bounceOff(edges[1])) {
    Villian.visible=true;
      }
        
    if (Villian.collide(wall)) {
    Villian.velocityX=3;
    }
    
      
    
      
      

  drawSprites();
}