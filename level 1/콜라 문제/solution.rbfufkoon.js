function solution(a, b, n) {
  let total = 0;

  while (n >= a) {
    let getCount = Math.floor(n / a) * b;
    total += getCount;
    n = Math.floor(n / a) * b + (n % a);
  }

  return total;
}
