function solution(n) {
    var answer = [];
    for (let i = n.toString().length - 1; 0 <= i; i--) {
  answer.push(Number.parseInt(n.toString().charAt(i)));
}
    return answer;
}