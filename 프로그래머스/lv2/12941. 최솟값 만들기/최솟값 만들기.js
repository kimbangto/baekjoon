function solution(A,B){
    A.sort((a, b) => a - b);
B.sort((b, a) => a - b);
    let answer = A.reduce((acc, cur, index) => {
  return acc + cur * B[index];
}, 0);

    return answer;
}