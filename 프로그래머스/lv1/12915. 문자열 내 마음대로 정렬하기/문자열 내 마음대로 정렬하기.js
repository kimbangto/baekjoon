function solution(strings, n) {
    const arr = [];

strings.forEach((word) => {
  arr.push(word[n] + word.slice(0, n) + word.slice(n + 1, word.length));
});
arr.sort();

const answer = [];

arr.forEach((word) => {
  answer.push(word.slice(1, n + 1) + word[0] + word.slice(n + 1, word.length));
});
    return answer;
}