function solution(num, total) {
    let answer = [];
let center1 = 0;
let center2 = 0;

if(num % 2 === 0) { // 짝수라면
    center1 = Math.floor(total/num);
    center2 = Math.ceil(total/num);
    answer[num/2-1] = center1;
    answer[num/2] = center2;
    for(let i=num/2-2; 0<=i; i--) {
        answer[i] = center1-1;
        center1 = center1-1;
    }
    for(let i=num/2+1; i<num; i++) {
        answer[i] = center2+1;
        center2 = center2+1;
    }
} else if(num % 2 === 1) { // 홀수라면
    center1 = total/num;
    center2 = total/num;
    answer[Math.floor(num/2)] = center1;
    for(let i=Math.floor(num/2)-1; 0<=i; i--) {
        answer[i] = center1-1;
        center1 = center1-1;
    }
    for(let i=Math.floor(num/2)+1; i<num; i++) {
        answer[i] = center2+1;
        center2 = center2+1;
    }
}
    return answer;
}