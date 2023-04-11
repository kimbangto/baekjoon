function solution(s) {
    const sArray = s.split(' ');

let answer = 0;

for(let i=0; i<sArray.length; i++) {
    if(sArray[i] != 'Z') {
        answer += parseInt(sArray[i]);
    } else {
        answer -= parseInt(sArray[i-1]);
    }
}
    return answer;
}