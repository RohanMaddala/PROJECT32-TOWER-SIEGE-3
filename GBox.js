class GBox {
    constructor(x,y) {
      var options = {
          isStatic: false,
          friction : 1.2
      }
      this.body = Bodies.rectangle(x,y,40,50,options);
      this.width = 40;
      this.height = 50;
      World.add(world, this.body);
    }
    display(){
      //console.log(this.body.speed);
      if(this.body.speed < 3){
        var pos =this.body.position;
        rectMode(CENTER);
        push()
        strokeWeight(4)
        stroke("black")
        
        fill("grey");
        rect(pos.x, pos.y, this.width, this.height);
        pop()    
      }
      else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        
        pop();
      }
     }
   
     score(){
       if (this.Visiblity < 0 && this.Visiblity > -1005){
         score++;
       }
     }
  }
  