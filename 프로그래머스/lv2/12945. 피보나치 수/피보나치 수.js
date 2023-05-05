function solution(n) {
    const fibonaci = [0, 1, 1];

while (fibonaci.length !== n + 1) {
  fibonaci.push(
    (fibonaci[fibonaci.length - 1] + fibonaci[fibonaci.length - 2]) % 1234567
  );
}
    return fibonaci[n];
}