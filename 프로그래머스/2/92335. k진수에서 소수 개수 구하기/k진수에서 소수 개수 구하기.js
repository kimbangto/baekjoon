function solution(n, k) {
  const change = n.toString(k);
  const split = change.split('0').map((x) => Number(x));

  function isPrime(num) {
    if (num === 1 || num === 0) return false;
    if (num === 2) return true;
    const length = Math.sqrt(num);
    for (let i = 2; i <= length; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  const result = split.filter((x) => isPrime(x)).length;
  return result;
}