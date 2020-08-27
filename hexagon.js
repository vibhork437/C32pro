class Hexagon{
    constructor(x,y,radius){
        var options={
            friction:1.0,
            density:0.2,
            //restitution:0.2
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius
       this.image = loadImage("pokeball.png");
        World.add(world,this.body);  
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y);
        rotate(angle)
        rectMode(CENTER)
       fill("blue");
        //circle(0,0,this.radius);
        imageMode(CENTER);
        image(this.image,0,0,50,50)
        pop()
    }
}