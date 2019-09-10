class Point {
  constructor(position){
    this.position = position;

  }

  draw(context){
    context.beginPath();
    context.strokeStyle = "rgb(0,0,255)";
    context.fillStyle = "rgba(10,100,50,0.3)";
    context.arc(this.position.dx,this.position.dy,120,0,2*Math.PI);
    context.stroke();
    context.fill();
    context.closePath();
    }
}
