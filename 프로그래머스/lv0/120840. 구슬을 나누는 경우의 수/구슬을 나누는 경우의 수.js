function solution(balls, share) {
    function factorial(n) {
    let result = BigInt(1);
    for(let i=n; 0<i; i--) {
        result *= BigInt(i);
    }
    return result;
}

let answer = Number(factorial(balls) / (factorial(balls-share) * factorial(share)));
    return answer;
}