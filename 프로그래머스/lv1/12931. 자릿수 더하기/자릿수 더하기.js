function solution(n)
{
    const m = n.toString().split('');

let answer = 0;

m.forEach((item) => (answer += Number.parseInt(item)));

    return answer;
}