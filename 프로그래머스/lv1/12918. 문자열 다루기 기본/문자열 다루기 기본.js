function solution(s) {
    let answer = true;
    const arr = s.split('');

if (!(arr.length === 4 || arr.length === 6)) return false;

arr.forEach((item) => {
  if (isNaN(Number(item))) answer = false;
});

    return answer;
}