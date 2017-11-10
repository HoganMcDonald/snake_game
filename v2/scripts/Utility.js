class Utility {
  static random(min, max) {
    if (max >= min) {
      return Math.round(Math.random() * (max - min) + min);
    } else {
      return new Error('Max cannot be smaller than min when generating random number');
    }
  };

}
