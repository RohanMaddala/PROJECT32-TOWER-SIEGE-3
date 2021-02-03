class Polygon{
    constructor(){
        var options ={
            frictionAir : 0.005,
            density :1.0
        }

        this.body = Bodies.circle(200, 350,20, options)
        World.add(world,this.body);
        this.radius = 100;
        
        this.image=loadImage("polygon.png")

        
    }
 
    display(){
        var pos=this.body.position
    
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
    }
 
}