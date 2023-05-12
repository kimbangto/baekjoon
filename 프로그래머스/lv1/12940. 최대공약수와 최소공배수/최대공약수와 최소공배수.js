function solution(n, m) {
    let answer = [0, 0];

for (let i = m; 0 < i; i--) {
  if (n % i === 0 && m % i === 0) {
    answer[0] = i;
    break;
  }
}

for (let i = m; i <= n * m; i++) {
  if (i % n === 0 && i % m === 0) {
    answer[1] = i;
    break;
  }
}
    return answer;
}