class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
        
        this.bodyA = bodyA;
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;


    }
    attach(){
        this.sling.bodyA = this.bodyA;
    }
    display(){

        

       
        if(this.sling.bodyA!= null){

    
        
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push ()

        strokeWeight(10);
        stroke(48, 22, 8);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop ();


        }
        
    }
    
}