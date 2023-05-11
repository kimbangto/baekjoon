function solution(s) {
    const arr = [];
for (let i = 0; i < s.length; i++) {
  arr.push(s.charCodeAt(i));
}
arr.sort((b, a) => a - b);
let answer = '';
arr.forEach((item) => (answer += String.fromCharCode(item)));

    return answer;
}