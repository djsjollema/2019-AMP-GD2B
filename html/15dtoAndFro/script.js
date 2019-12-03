const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let grid = new Grid();

let A = new Point(new Vector2d(200,300),20,true,"red")
let B = new Point(new Vector2d(500,400),20,true,"blue")

let point = new DPoint(new Vector2d(200,300),new Vector2d(0,0),new Vector2d(0,0),10,"white");

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  grid.draw(context);
  A.draw(context);
  B.draw(context);
  point.draw(context);

  point.vel.differenceVector(B.position,point.pos);
  point.vel.scalarMul(0.01);
  point.update();

}

animate()
