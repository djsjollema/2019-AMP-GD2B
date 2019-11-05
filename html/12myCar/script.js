const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let grid = new Grid();



function animate(){
  requestAnimationFrame(animate);
  //context.clearRect(0,0,width,height);
  grid.draw(context);

}


animate();
