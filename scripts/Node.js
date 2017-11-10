class Node {
  constructor(xIndex, yIndex, unitSize) {
    this.unitSize = unitSize
    this.xIndex = xIndex;
    this.yIndex = yIndex;

    this.x = (xIndex + 1) * unitSize;
    this.y = (yIndex + 1) * unitSize;
    this.status = 'inactive'; // empty, snake, food
    this.show();
  }

  show() {
    console.log('show');
    stroke(255);
    rect(this.x, this.y, this.unitSize, this.unitSize);
  }
}
