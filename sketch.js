var ship,shipImage;
var sea,seaimage;
function preload(){
shipImage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaimage=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200,20,20);
sea.addImage(seaimage);
sea.scale=0.3;
  ship=createSprite(200,200,20,20);
  ship.addAnimation("movingShip",shipImage);
  ship.scale=0.3;

}

function draw() {
  background("blue");
 sea.velocitX=-3;
 if(sea.x < 0){
  sea.x = sea.width/8;
}
 











 drawSprites();
}