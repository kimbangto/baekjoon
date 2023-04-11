function solution(n) {
    let answer = [];

let yaksuArray = [];
for(let i=2; i<=n; i++) {
    if(n % i === 0) {
        yaksuArray.push(i);
    }
}

console.log(yaksuArray);

function isPrime(num) {
    if(num == 2 || num == 3) {
        return true;
    }
    for(let i=2; i<num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

yaksuArray.forEach((item) => {
    if(isPrime(item)) {
        answer.push(item);
    }
})
    return answer;
}