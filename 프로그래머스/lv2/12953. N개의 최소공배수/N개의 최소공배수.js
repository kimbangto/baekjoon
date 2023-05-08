function solution(arr) {
    arr.sort((a, b) => a - b);

const max = arr[arr.length - 1];
let answer = max;

const isMultiple = (num) => answer % num === 0;

while (true) {
  if (arr.every(isMultiple)) break;
  else answer += max;
}
    return answer;
}