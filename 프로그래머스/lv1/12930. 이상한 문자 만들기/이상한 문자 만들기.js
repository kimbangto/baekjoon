function solution(s) {
    const arr = [];

s = s.toLowerCase();
let answer = s;

s.split(' ').forEach((item) => {
  if (item !== '') arr.push(item);
});

arr.forEach((word) => {
  let strangeWord = '';
  for (let i = 0; i < word.length; i++) {
    if (i % 2 === 0) strangeWord += word[i].toUpperCase();
    else strangeWord += word[i].toLowerCase();
  }
  const regex = new RegExp(`\\b${word}\\b`);
  answer = answer.replace(regex, strangeWord);
});
    return answer;
}