function solution(a, b) {
    let s = 0;
let l = 0;

if (a > b) {
  s = b;
  l = a;
} else {
  s = a;
  l = b;
}

let answer = 0;

for (let i = s; i <= l; i++) {
  answer += i;
}
    return answer;
}