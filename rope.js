class Rope{
    constructor(bodyA, pointB, xoffset){
        var options = {
            bodyA: bodyA,
            pointB: pointB,

            

        }
       
        this.pointB = pointB
        
        this.xoffset = xoffset
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    

   
    display(){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            stroke(255);
            strokeWeight(5);
            line(pointA.x, pointA.y, pointB.x+this.xoffset, pointB.y );
    }
} 