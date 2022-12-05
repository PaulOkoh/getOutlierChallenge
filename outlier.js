// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a function that takes the array as an argument and returns this “outlier” N.

// Examples:

// [2, 4, 0, 100, 4, 11, 2602, 36] Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] Should return: 160 (the only even number)

function getOutlier(arr) {
  let evenArr = []
  let oddArr =[]
  for(let i =0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      evenArr.push(arr[i])
    }else if(arr[i] % 2 !== 0) {
      oddArr.push(arr[i])  
    }
  }
  // return the array with a length of 1
  if( evenArr.length === 1) {
    return evenArr[0]
  }else if(oddArr.length === 1) {
    return oddArr[0]
  }

}

console.log(getOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
console.log(getOutlier([160, 3, 1719, 19, 11, 13, -21]))

