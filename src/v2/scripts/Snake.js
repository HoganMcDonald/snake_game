class Snake {
  constructor() {
    this.direction = 'left';
    this.x = width / 2;
    this.y = height / 2;
    this.size = 15;
    this.color = 230;

    this.length = 0;
    this.body = [];

    this.speed = 4; // 1 = 60fps, 2 = 30fps, 4 = 15fps
    this.counter = 0;
  }

  changeDirection(direction) {
    this.direction = direction;
  }

  eat() {
    length++;
    this.body.push({x: this.x, y: this.y});
  }

  render() {
    fill(this.color);
    rect(this.x, this.y, this.size, this.size);
    for (var i = 0; i < this.body.length; i++) {
      fill(this.color);
      rect(this.body[i].x, this.body[i].y, this.size, this.size);
    }
  }

  move() {

    // moves body with head
    this.body.unshift({x: this.x, y: this.y});
    this.body.pop();

    // updates head location
    switch (this.direction) {
      case 'left':
        if (this.x - this.size < 0) {
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
        if (this.y - this.size < 0) {
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

  update(food) {
    this.counter++
    if (this.counter % this.speed == 0) {
      this.counter = 0;
      this.move();
      for (var i = 0; i < this.body.length; i++) {
        if (this.x == this.body[i].x && this.y == this.body[i].y) {
          this.body = [];
        }
      }
      if (this.x == food.x && this.y == food.y) {
        this.eat();
        food.changeLocation();
      }
    }
  }

}
