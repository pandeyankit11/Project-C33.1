class Plinko{
    constructor(x,y){
        var options ={
            isStatic:true,
            friction:1,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=10;
        
        this.body=Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);

        
    }
    display(){
     var posi =this.body.position;
     ellipseMode(RADIUS);
    strokeWeight(3);
    fill("white");
    ellipse(posi.x,posi.y,this.r);

     

    }
}