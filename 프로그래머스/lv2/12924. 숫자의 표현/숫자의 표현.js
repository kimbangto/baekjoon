function solution(n) {
    let answer = 0;
    
    let count;

for (let i = 1; i < n; i++) {
  count = 0;
  for (let j = i; count < n; j++) {
    count += j;
    if (count === n) {
      answer++;
      break;
    }
  }
}
    return answer+1;
}