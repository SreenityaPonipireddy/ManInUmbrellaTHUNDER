class Umbrella{
    constructor(x,y){
        this.image=loadImage("Walking Frame/walking_1.png");
        var options={
           isStatic: true
        }
        this.body=Bodies.circle(x,y,5,options);
        this.r=5;
        World.add(world, this.body);
        }
display(){
push();
imageMode(CENTER);
scale(0.3);
image(this.image,this.body.position.x,this.body.position.y);
pop();
}
}