var snake, food;

function setup() {
  createCanvas(600, 600);
  snake = new Snake();
  food = new Food();
}

function draw() {
  background(20);
  snake.update(food);
  snake.render();
  food.render();
}

function keyPressed() {
  switch (key) {
    case 'W':
      snake.changeDirection('up');
      break;
    case 'A':
      snake.changeDirection('left');
      break;
    case 'S':
      snake.changeDirection('down');
      break;
    case 'D':
      snake.changeDirection('right');
      break;
    default:
      break;
  }
}
