class Box{
    constructor(x,y){
        var options={
            friction:5.0
        }
        this.body = Bodies.rectangle(x,y,30,50,options)
        this.width = 30
       this.height = 50
       this.visibility = 0
        World.add(world,this.body);  
    }
    display(){
        if(this.body.speed < 3){

        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER)
       fill("yellow");
        rect(0,0,this.width,this.height);
        pop()
        } else
        {
        push();
        World.remove(world,this.body)
        this.visibility = this.visibility-5
        tint(0,this.visibility); 
        pop();
            
        }
           
        }
        
       
          
        score(){
            if(this.visibility<0&&this.visibility> -105){
            Score = Score + 100;
        }
}
        
    
    
        }

        
