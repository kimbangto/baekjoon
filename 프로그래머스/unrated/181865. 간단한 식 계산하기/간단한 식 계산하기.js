function solution(binomial) {
    const split = binomial.split(' ');
    if(split[1] === '+') return Number(split[0]) + Number(split[2]);
    if(split[1] === '-') return Number(split[0]) - Number(split[2]);
    if(split[1] === '*') return Number(split[0]) * Number(split[2]);
}