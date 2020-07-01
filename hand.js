class Hand{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.0015,
           length: 50
        }
       // this.bodyA = bodyA;
        this.pointB = pointB;
        //this.bodyA=bodyA;
        this.Hand = Constraint.create(options);
        World.add(world, this.Hand);
    }

    fly(){
        this.Hand.bodyA=null;
    }

    display(){
       // push();
       if(this.Hand.bodyA){ 
       var pointA=this.Hand.bodyA.position
       var pointB = this.pointB;
       stroke("black"); 
       strokeWeight(4);
        line(pointA.x,pointA.y, pointB.x,pointB.y);
        //console.log(this.Hand);
       }
    }
       // pop();    
    }
