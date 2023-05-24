function solution(n, left, right) {
    var answer = [];
    for (let i = left; i <= right; i++) {
      const j = Math.floor(i / n + 1);
      answer.push(Math.max((i % n) + 1, j));
    }
    return answer;
}