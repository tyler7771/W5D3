Array.prototype.bubbleSort = function () {
  let sorted = false;

  while (sorted === false) {
    sorted = true;

    for (let i = 0; i < this.length; i++) {
      if (this[i] > this[i + 1]) {
        saved = this[i];
        this[i] = this[i + 1];
        this[i + 1] = saved;
        sorted = false;
      };
    };
  }
  return this
}

// console.log([8,7,1,9,4,3].bubbleSort())


String.prototype.mySubstrings = function() {

  let substrings = []

  for (let i = 0; i <= this.length; i++ ) {
    for (let j = i + 1; j <= this.length; j++ ) {
      substrings.push(this.slice(i, j))
    }
  }
  return substrings
}

console.log("Cat".mySubstrings())
