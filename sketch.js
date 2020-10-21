function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  fixedRect.velocityX= -5;
  
  movingRect = createSprite(200, 200, 50, 50);
  movingRect.shapeColor="green";
  movingRect.debug=true;
  movingRect.velocityX= 5;
}

function draw() {
  background(0);
     
  if (keyDown("space")){
    movingRect.velocityX= 5;
    fixedRect.velocityX= -5;
  }

  //movingRect.x=mouseX;
  //movingRect.y=mouseY;
  isTouching(fixedRect,movingRect);
  bounceOff(fixedRect,movingRect);
  drawSprites();
}