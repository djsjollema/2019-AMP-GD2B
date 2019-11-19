class DPoint {
  constructor(pos,vel,acc,radius,color){
    this.pos = pos;
    this.vel = vel;
    this.acc = acc;
    this.radius = radius;
    this.color = color;
  }

  draw(context){
    context.beginPath();
    context.strokeStyle = "rgb(0,0,255)";
    context.fillStyle = this.color;
    context.arc(this.pos.dx,this.pos.dy,this.radius,0,2*Math.PI);
    context.stroke();
    context.fill();
    context.closePath();
    }
}
