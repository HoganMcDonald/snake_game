class Game {

  constructor() {
    this.unitSize = 15;
    this.totalUnits = width / this.unitSize;
    this.board = this.genBoard();
    this.showBoard();
  }

  genBoard() {
    let board = [];
    let unitsPerRow = width/this.unitSize;

    for (var i = 0; i < unitsPerRow; i++) {
      board[i] = [];
      for (var j = 0; j < unitsPerRow; j++) {
        board[i][j] = new Node(i, j, this.unitSize);
      }
    }
    return board;
  } // end genBoard

  showBoard() {
    for (var i = 0; i < this.board.length; i++) {
      for (var j = 0; j < this.board[i].length; j++) {
        this.board[i][j].update();
      }
    }
  }

}
