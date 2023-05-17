function solution(food) {
    let answer = '0';

for (let i = food.length; 0 < i; i--) {
  answer =
    `${i}`.repeat(Math.floor(food[i] / 2)) +
    answer +
    `${i}`.repeat(Math.floor(food[i] / 2));
}
    return answer;
}