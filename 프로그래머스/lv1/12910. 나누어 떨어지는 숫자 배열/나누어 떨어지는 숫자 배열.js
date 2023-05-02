function solution(arr, divisor) {
    const answer = [];

arr.forEach((item) => {
  if (item % divisor === 0) {
    answer.push(item);
  }
});
    
    answer.sort((a, b) => a - b);

if (answer.length === 0) {
  answer.push(-1);
}
    return answer;
}