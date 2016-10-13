Array.prototype.myUniq = function () {
  const uniques = []

  for (let i = 0; i < this.length; i++) {
    if (uniques.includes(this[i])) {
      continue
    } else {
      uniques.push(this[i])
    }
  }
  return uniques
}

// console.log([1, 2, 1, 3, 3].myUniq())



Array.prototype.twoSum = function () {

  const sums = []

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {
      if (this[i]+this[j] === 0 ) {
        if (i === j || i > j) { continue }
        else {
          sums.push([i, j])
        }
      }
    }
  }
  return sums
}


// console.log([-1, 0, 2, -2, 1].twoSum())



Array.prototype.myTranspose = function () {

  const transposed = []

  for (let i = 0; i < this[0].length; i++) {
    let waitingRoom = []
    for (let j = 0; j < this.length; j++) {
      waitingRoom.push(this[j][i])
    }
    transposed.push(waitingRoom)
  }
  return transposed
}

console.log([[0, 1, 2],[3, 4, 5],[6, 7, 8]].myTranspose())
