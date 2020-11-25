class box{
constructor(x, y, width, height){
    var physicalproperty = {'restitution': 0.5, 'friction':0.5, 'density':1 }
    this.body=Bodies.rectangle(x, y, width, height, physicalproperty)
    this.width = width 
    this.height = height
    World.add(world, this.body)
}
display(){
var prop = this.body.position
var angle = this.body.angle
Rotate(angle)
Push()
rectMode(CENTER);
fill (200)
rect(0, 0, this.width, this.height)
}
}
