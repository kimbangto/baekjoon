function solution(numbers, n) {
    var answer = 0;
    for(let i=0; i<numbers.length; i++) {
        if(n < answer) return answer;
        answer += numbers[i];
    }
    return answer;
}