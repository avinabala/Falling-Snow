const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var bgImg

function preLoad(){
  bgImg = loadImage("snow2.jpg")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;
  
  girl=new girl(400,400,40);

  Engine.run(engine);
}

function draw() {
  background(225,225,225);  

  girl.display()
  Snow.display()

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