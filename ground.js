class ground{
 
    constructor(x, y, width, height){
        var position = {isStatic:true}
        this.body=Bodies.rectangle(x, y, width, height, position)
        this.width = width
        this.height = height
        World.add(world, this.body)
    }
display(){
var pos= this.body.position
rectMode(CENTER);
fill (150);
rect(pos.x, pos.y, this.width, this.height)
}
}