class box{
    constructor(x,y,width,height){
        var options={
            restitution:0.5,
            friction:0.01,
            gravity:0.7
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=width;
    this.height=height;
    World.add(world, this.body);
    }
 display(){
        
        // Every time a mouse press occures create a new box.
    
     push();
    var pos =this.body.position;
    rectMode(CENTER);
    fill("brown");
    pop();
  rect(pos.x, pos.y, this.width,this.height);
    }

    

    
}