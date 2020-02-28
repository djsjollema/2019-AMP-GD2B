const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let grid = new Grid();

let A = new Point(new Vector2d(200,300),20,true,"red");
let B = new Point(new Vector2d(500,400),20,true,"blue");

let C = new Point(new Vector2d(250,350),5,true,"yellow");


let line_1 = new LinearFunction(1,1);
let line_2 = new LinearFunction(1,1);

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  grid.draw(context);

  line_1.defineLineByTwoPoints(A,B);
  line_2.defineLineByTwoPoints(A,C);

  line_1.draw(context);
  line_2.draw(context);
  
  A.draw(context);
  B.draw(context);

  C.draw(context);
}

animate()
