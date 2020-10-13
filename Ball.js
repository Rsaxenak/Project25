class Ball
{
    constructor(x,y,radius) 
    {
        var options = {
            'isStatic': false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            scale :0.1
        }
        this.body = Bodies.circle(x,y,radius,options);
        
//        this.x = x;
//        this.y = y;
        this.image = loadImage("paper.png");
        World.add( world, this.body);
    }
    display() {
        var pos = this.body.position;
//        var angle = this.body.angle;
        push();
        imageMode(CENTER);  
        this.scale = 0;
//        rotate(angle);
        fill("yellow");
        image(this.image, pos.x, pos.y, this.radius);
        pop();
    }
}