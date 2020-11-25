
var player1,boot;
var computer, gamer;

function setup() {
  createCanvas(800,400);
 player1 = createSprite(400, 200, 50, 50);
 boot = createSprite(300,350,50,20);
 computer = createSprite(200,250,50,50);
 gamer = createSprite(250,300,10,10);
}

function draw() {
  background("blue");  
  gamer.x = mouseX;
  gamer.y = mouseY;
  touch(player1,gamer)
  touch(boot,gamer)
  touch(computer,gamer)
  drawSprites();
}

function touch(obj1,obj2)
{
  if(obj1.x - obj2.x < obj1.width/2 + obj2.width/2
    && obj2.x - obj1.x  <  obj2.width/2 + obj1.width/2
    && obj1.y - obj2.y  <  obj1.height/2 + obj2.height/2
    &&obj2.y - obj1.y  <  obj2.height/2 + obj1.height/2
    )
   {
     obj1.shapeColor = "red";
     obj2.shapeColor = "green";
   }
  else()
  {
    obj1.shapeColor = "grey";
    obj2.shapeColor = "grey";
  }
}