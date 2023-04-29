function solution(x, n) {
    var answer = [x];
    while (answer.length < n) {
  answer.push(answer[answer.length - 1] + x);
}
    return answer;
}