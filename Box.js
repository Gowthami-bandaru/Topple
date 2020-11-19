class Box {
    constructor(x,y,width,height)
    {
        var ball_options={
            restitution : 1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,ball_options);
        World.add(world,this.body);
    }
 display()
 {
     var pos= this.body.position;
     rectMode(CENTER)
     rect(pos.x, pos.y, this.width, this.height);
 }
}