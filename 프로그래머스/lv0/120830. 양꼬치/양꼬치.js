function solution(n, k) {
const service = Math.floor(n/10) * 2000;

const answer = n * 12000 + k * 2000 - service
    return answer;
}