class Girl{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0,
            isStatic :true
        }
        this.visiblity = 225;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image= loadImage("girl.png")
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