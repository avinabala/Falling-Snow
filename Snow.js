class Snow{
  constructor(x,y,width,height) {
    var options = {
        isStatic: false
    }
    
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("snow4.webp")
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle	
push()
translate(pos.x, pos.y);
rectMode(CENTER);
rotate(this.body.angle)
fill(255,0,255)
imageMode(CENTER);
image(this.image, 0,0,this.width, this.height)
pop()
  }
  }