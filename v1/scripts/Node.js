class Node {

  constructor(xIndex, yIndex, unitSize) {
    this.unitSize = unitSize
    this.xIndex = xIndex;
    this.yIndex = yIndex;
    this.x = (xIndex) * unitSize;
    this.y = (yIndex) * unitSize;
    this.status = 'empty'; // empty, snake, food
  }

  show() {
    fill(20);
    noStroke();
    rect(this.x, this.y, this.unitSize, this.unitSize);
  }

  update(status) {
    this.status = status;
    switch (status) {
      case 'empty':
        fill(20);
        noStroke();
        rect(this.x, this.y, this.unitSize, this.unitSize);
        break;
      case 'snake':
        fill(230);
        noStroke();
        rect(this.x, this.y, this.unitSize, this.unitSize);
        break;
      case 'food':
        fill('red');
        noStroke();
        rect(this.x, this.y, this.unitSize, this.unitSize);
        break;
      default:
        fill(20);
        noStroke();
        rect(this.x, this.y, this.unitSize, this.unitSize);
    }
  }

}
