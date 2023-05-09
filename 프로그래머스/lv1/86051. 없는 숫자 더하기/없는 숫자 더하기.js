function solution(numbers) {
    let answer = 0;
const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
num.forEach((item) => {
  if (numbers.includes(item)) {
  } else {
    answer += item;
  }
});
    return answer;
}