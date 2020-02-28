const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let grid = new Grid();

let A = new Point(new Vector2d(200,300),20,true,"red")
let B = new Point(new Vector2d(500,400),20,true,"blue")

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  grid.draw(context);
  A.draw(context);
  B.draw(context);
}

animate()
