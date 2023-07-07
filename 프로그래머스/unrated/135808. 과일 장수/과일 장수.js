function solution(k, m, score) {
    var answer = 0;
    score.sort((a,b) => a-b);
    score.splice(0, score.length%m);
    for(let i=0; i<score.length; i++) {
        if(i % m === 0) answer += score[i] * m;
    }
    return answer;
}