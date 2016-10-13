function exponentiation(b, n) {
  if (n === 0) {
    return 1;
  } else {
    return b * exponentiation(b , n - 1)
  }
}

// console.log(exponentiation(5,4))

function exponentiation2(b, n) {
  if (n === 0) {
    return 1;
  } else if (n === 1) {
    return b
  } else if (n % 2 !== 0) {
    let expoHalf = exponentiation2(b, ((n-1)/2))
    return b * expoHalf * expoHalf
  } else if (n % 2 === 0) {
    let expoHalf = exponentiation2(b, (n/2))
    return expoHalf * expoHalf
  }
}

// console.log(exponentiation2(5,4))

function fibonacci(n) {
  if (n === 1) {
    return [1];
  } else if (n === 2) {
    return [1, 1];
  } else {
    let preceding = fibonacci(n - 1)
    let proceding = preceding[preceding.length - 1] + preceding[preceding.length - 2]
    preceding.push(proceding)
    return preceding;
  }
}

// console.log(fibonacci(8))


function binarySearch(array, target) {

  let mid = Math.floor(array.length/2)

  if (array[mid] === target) { return mid
  } else if (array.length === 1 && array[0] !== target) {
    return null
  } else if (array[mid] > target ) {
    return binarySearch(array.slice(0, mid), target )
  } else if (array[mid] < target ) {
    let b = binarySearch(array.slice(mid), target)
    return b === null ? null : mid + b
  }
}

// console.log(binarySearch([2, 4, 6, 8, 10], 2))
//
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 6))

function makeChange(change, coins) {
  if (change === 0) {
    return []
  } else {
    for (let i = 0; i < coins.length; i++){
      if (change >= coins[i]) {
        let returnedChange = makeChange((change - coins[i]), coins);
        returnedChange.unshift(coins[i])
        return returnedChange;
      }
    }
  }
}

// console.log(makeChange(19, [10,7,1]))

function merge(left, right) {
  let merged = []

  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      merged.push(right.shift())
    } else {
      merged.push(left.shift())
    }
  }
  return merged.concat(left).concat(right)
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array
  }
  let mid = Math.floor(array.length / 2)
  let left = mergeSort(array.slice(0,mid));
  let right = mergeSort(array.slice(mid));
  return merge(left, right)
}



// console.log(mergeSort([1945,1944,1939,1991,1975]))

function subsets(array) {
  if (array.length === 0) {
    return []
  } else {
    let preceding = subsets(array.slice(0, array.length - 1))
    let lastEle = array[array.lenth - 1]
    let proceding = []
    preceding.forEach(el) {
      proceding.push(el.concat(lastEle))
    }
    return preceding.concat(proceding)
  }
}

console.log(subsets([1,2,3]))
