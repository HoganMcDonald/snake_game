var snake;

function setup() {
  createCanvas(600, 600);
  snake = new Snake();
}

function draw() {
  background(20);
}

function keyPressed() {
  switch (key) {
    case 'W':
      snake.direction = 'up';
      break;
    case 'A':
      snake.direction = 'left';
      break;
    case 'S':
      snake.direction = 'down';
      break;
    case 'D':
      snake.direction = 'right';
      break;
    default:
      break;
  }
}
