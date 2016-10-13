Array.prototype.myEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
}


// console.log([1,2,3,4,5,6,7].myEach(function(el) {el + 1}))

Array.prototype.myMap = function (cb) {
  const newArray = []
  this.myEach(element => newArray.push(cb(element)) );
  return newArray
}

// console.log([1,2,3,4].myMap(el => (el + 1)))


Array.prototype.myInject = function(cb) {
  let accumulator = this.shift()

  this.myEach(element => accumulator = cb(element, accumulator)) ;
  return accumulator
}

// console.log([1,2,3,4].myInject( (ele, accum) => accum - ele ) )
