function solution(s)
{
    const arr = s.replaceAll(/(\w)\1/g, '').split('');

const answer = [];

arr.forEach((item) => {
  answer[answer.length - 1] === item ? answer.pop() : answer.push(item);
});

return (answer[0] ? 0: 1)

}