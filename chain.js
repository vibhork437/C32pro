class Chainclass{
constructor(bodyA,pointB){
    var options={
        bodyA: bodyA,
        pointB: pointB,
        stiffness:0.04,
        length:10
    }
    this.pointB = pointB
    this.chain = Constraint.create(options);
    World.add(world,this.chain);
}

fly(){
    this.chain.bodyA = null }

    attach(body){
        this.chain.bodyA = body
    }

display(){
    if(this.chain.bodyA){
var pos1 = this.chain.bodyA.position
var pos2 = this.pointB
strokeWeight(4);
//line(pos1,pos2,pos1,pos2);
}
}
}