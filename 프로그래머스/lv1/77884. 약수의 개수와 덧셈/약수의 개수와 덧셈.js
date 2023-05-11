function solution(left, right) {
    let answer = 0;

for (let i = left; i <= right; i++) {
  const yaksu = [];
  for (let j = 1; j <= i; j++) {
    if (i % j === 0) yaksu.push(j);
  }
  if (yaksu.length % 2 === 0) answer += i;
  else answer -= i;
}
    return answer;
}