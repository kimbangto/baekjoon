function solution(s) {
    const answer = [-1];

const arr = s.split('');

for (let i = 1; i < arr.length; i++) {
  for (let j = i - 1; 0 <= j; j--) {
    if (arr[i] === arr[j]) {
      answer.push(i - j);
      break;
    }
    if (j === 0) answer.push(-1);
  }
}
    return answer;
}