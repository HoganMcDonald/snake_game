class Snake {
  constructor() {
    this.body = [{x: 20, y: 20}];
    this.direction = 'up';
    this.speed = 3; // 1 = 60fps, 2 = 30fps, 4 = 15fps, 6 = 10fps
    this.counter = 0;
  }

  changeDirection(direction) {
    this.direction = direction;
  }

  update(board) {
    this.counter++;
    if (this.counter % this.speed == 0) {
      this.counter = 0
      for (var i = this.body.length - 1; i >= 0; i--) {

        switch (this.direction) {
          case 'left':
            if (this.body[i].x - 1 < 0) {
              this.body[i].x = board.length - 1;
            } else {
              this.body[i].x -= 1;
            }
            break;
          case 'right':
            if (this.body[i].x + 1 > board.length - 1) {
              this.body[i].x = 0;
            } else {
              this.body[i].x += 1;
            }
            break;

          case 'up':
            if (this.body[i].y - 1 < 0) {
              this.body[i].y = board.length - 1;
            } else {
              this.body[i].y -= 1;
            }
            break;
          case 'down':
            if (this.body[i].y + 1 > board.length - 1) {
              this.body[i].y = 0;
            } else {
              this.body[i].y += 1;
            }
            break;
          default:
            break;
        }


        board[this.body[i].x][this.body[i].y].update('snake');

      }
    }


  } // end update method

}
