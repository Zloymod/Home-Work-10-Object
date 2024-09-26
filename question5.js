function sum(a, b, ...other) {
  return a + b + other.reduce((a, i) => a + i, 0);
}
console.log(sum(2, 2));
console.log(sum(1, 2, 3));
console.log(sum(10, 15, 249, 653, 846));
