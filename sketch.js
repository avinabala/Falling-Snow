const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var bgImg

function preload(){
  bgImg = loadImage("snow2.jpg")
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
	world = engine.world;

  snow = new Snow(100,100,100,100);
  snow2 = new Snow(300,100,100,100);
  snow3 = new Snow(400,100,100,100);
  snow4 = new Snow(500,100,100,100);
  snow5 = new Snow(600,100,100,100);
  snow6 = new Snow(700,100,100,100);
  snow7 = new Snow(800,100,100,100);

  girl=new Girl(200,300,200,200);

  Engine.run(engine);
}

function draw() {
  background(bgImg);

  girl.display();
  snow.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();

  drawSprites();
}

function keyPressed(){

  if (keyDown(LEFT_ARROW)) {
    girl.velocityX=-2;
    girl.velocityY=0;
     }
     
   if (keyDown(RIGHT_ARROW)) {
   girl.velocityX=2;
   girl.velocityY=0;
   }

}