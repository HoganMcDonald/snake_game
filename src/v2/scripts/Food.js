class Food {
  constructor() {
    this.size = 15;
    this.x = Utility.random(0, 40) * this.size;
    this.y = Utility.random(0, 40) * this.size;
    this.color = 'teal';

  }

  render() {
    fill(this.color);
    rect(this.x, this.y, this.size, this.size);
  }

  changeLocation() {
    this.x = Utility.random(0, 40) * this.size;
    this.y = Utility.random(0, 40) * this.size;
  }
}
