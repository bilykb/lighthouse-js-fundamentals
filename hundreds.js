function howManyHundreds(sum) {
  let x = 0
   x = sum / 100;
  return Math.floor(x);
}

console.log(howManyHundreds(1111))