// detecting collision between 2 objects
var fixedRect, movingRect;
var car, wall;

function setup() {
  createCanvas(1200, 800);

  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "blue";

  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "red";

  car = createSprite(200,200,40,40);
  car.shapeColor = "yellow";
  car.velocityX = 4;

  wall = createSprite(1000,200,20,100);
  wall.shapeColor = "purple";
}

function draw() {
  background(0)

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(car, wall)) {
    car.shapeColor = "white";
  }

  BounceOff(car, wall);

  drawSprites();
}