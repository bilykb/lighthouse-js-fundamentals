function calculateRectangleArea(length, width) {
  let area = 0;
  area = length * width;
  if (length < 0 || width < 0) {
    return undefined;
  }
  return area;
}

function calculateTriangleArea(base, height) {
  let area = 0;
  area = (base * height) / 2;
  if (base < 0 || height < 0) {
    return undefined;
  }
  return area;
}

function calculateCircleArea(radius) {
  let area = Math.PI * (Math.pow(radius, 2));
  if (radius < 0) {
    return undefined;
  }
  return area;
}

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined