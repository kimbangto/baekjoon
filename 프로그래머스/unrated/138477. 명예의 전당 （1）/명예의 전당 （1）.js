function solution(k, score) {
    const winner = [];
const answer = [];
for (let i = 0; i < score.length; i++) {
  winner.push(score[i]);
  winner.sort((b, a) => a - b);
  if (winner.length === k + 1) winner.pop();
  answer.push(winner[winner.length - 1]);
}
    return answer;
}