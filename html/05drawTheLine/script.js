const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(200,200),15);

A.draw(context);

let l = new LinearFunction(1,100);

for(let x = 0; x < 100; x+= 10){
  console.log(x,l.calcY(x))
}
