const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(getRandom(width),getRandom(height)));
A.draw(context);

let B = new Point(new Vector2d(getRandom(width),getRandom(height)));
B.draw(context)

function getRandom(max){
  return Math.floor(Math.random()*max);
}
