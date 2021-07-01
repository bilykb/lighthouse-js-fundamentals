function range(start, end, step) {
  let some_array = [];
  for (let i = start; i <= end; i = i + step) {
    if (start === 0 && end === 0 && step === 0) {
      return some_array;
    } else if (start > end) {
      return some_array;
    } else if (step <= 0) {
      return some_array;
    }
    some_array.push(i);
  }
  return some_array
}  



console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));