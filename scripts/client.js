var game, snake;

function setup() {
  createCanvas(600, 600);
  game = new Game();
  snake = new Snake();
}

function draw() {
  background(20);
  game.showBoard();
  snake.update(game.board);
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
