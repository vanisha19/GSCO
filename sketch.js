var car, wall;
var speed, weight;
var block1, block2;

function setup() {
  createCanvas(1600,400);
  
  speed = random(55,90);
  weight = random(400,1500);
  
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = ("silver");

  wall = createSprite(1200, 200, 60, height/2);
  wall.shapeColor = color(80, 80, 80);
  
  block1 = createSprite(800, 100, 1600, 20);
  block1.shapeColor = ("black");

  block2 = createSprite(800, 300, 1600, 20);
  block2.shapeColor = ("black");
}

function draw() {
  background("ghostwhite");  
  
  if (wall.x - car.x < (car.width + wall.width/2))
  {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;

    if (deformation > 180)
    {
      car.shapeColor = color(255, 0, 0);
    }

    if (deformation < 180 && deformation > 100)
    {
      car.shapeColor = color(230, 230, 0);
    }
    
    if (deformation < 180)
    {
      car.shapeColor = color(0, 255, 0);
    }
  }
  
  drawSprites();
}