var game;

function setup() {
  createCanvas(600, 600);
  game = new Game();
}

function draw() {
  background(20);
  game.showBoard();
}
