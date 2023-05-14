function solution(d, budget) {
    d.sort((a, b) => a - b);
let total = 0;
let answer = 0;

d.forEach((item) => {
  if (item + total <= budget) {
    total += item;
    answer++;
  }
});
    return answer;
}