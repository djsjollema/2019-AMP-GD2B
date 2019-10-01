const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(200,200),15);
let B = new Point(new Vector2d(500,300),15);

A.draw(context);
B.draw(context);

let l = new LinearFunction(1/3,133.3);

for(let x = 0; x < width; x+= 10){
  console.log(x,l.calcY(x));
  let A = new Point(new Vector2d(x,l.calcY(x)),5);
  A.draw(context);
}
