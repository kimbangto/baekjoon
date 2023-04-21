function solution(A, B) {
    let answer = -1;

for(let i=0; i<B.length; i++) {
    if(A !== B) {
        A = A.charAt(A.length-1) + A;
        console.log(`끝자리 문자 앞에 하나 붙이기 : ${A}`);
        A = A.slice(0, B.length);
        console.log(`끝자리 문자 하나 떼기 : ${A}`);
    } else {
        answer = i;
        console.log(`${i}번째에 끝!`);
        break;
    }
}
    return answer;
}