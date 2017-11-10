class Snake {
  constructor() {
    this.direction = 'left';
    this.x = width / 2;
    this.y = height / 2;
    this.size = 15;
    this.color = 230;
    this.body = [];

    this.speed = 4; // 1 = 60fps, 2 = 30fps, 4 = 15fps
    this.counter = 0;
  }

  changeDirection(direction) {
    this.direction = direction;
  }

  render() {
    fill(this.color);
    rect(this.x, this.y, this.size, this.size);
  }

  move() {
    switch (this.direction) {
      case 'left':
        if (this.x - this.size <= 0) {
          this.x = width - this.size;
        } else {
          this.x -= this.size;
        }
        break;
      case 'right':
        if (this.x + this.size >= width) {
          this.x = 0;
        } else {
          this.x += this.size;
        }
        break;
      case 'up':
        if (this.y + this.size <= 0) {
          this.y = height - this.size;
        } else {
          this.y -= this.size;
        }
        break;
      case 'down':
        if (this.y + this.size >= height) {
          this.y = 0;
        } else {
          this.y += this.size;
        }
        break;
      default:

    }
  }

  update() {
    this.counter++
    if (this.counter % this.speed == 0) {
      this.counter = 0;
      this.move();
    }
  }

}
