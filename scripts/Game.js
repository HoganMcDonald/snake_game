class Game {

  constructor() {
    this.unitSize = 15;
    this.board = this.genBoard();
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
    console.log(board);
    return board;
  } // end genBoard

}
