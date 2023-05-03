function solution(s) {
    var answer = '';
    const sSplit = s.toLowerCase().split(' ');

console.log(sSplit);

sSplit.forEach(
  (item) =>
    (answer += item
      .charAt(0)
      .toUpperCase()
      .concat(item.slice(1, item.length).concat(' ')))
);

answer = answer.slice(0, answer.length - 1);
    return answer;
}