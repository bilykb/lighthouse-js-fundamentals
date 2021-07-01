function lastIndexOf(array, value) {
  if (array.length === 0) {
    return -1
  }
  for (const element of array) {
    if (element === value) {
      return array.lastIndexOf(value);
    }
    
  } 
  for (const element of array) {
    if (element !== value) {
      return array.lastIndexOf(value);
    }
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
