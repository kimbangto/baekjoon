function solution(n) {
    let count = 1;
    let answer = 1;

    while (count !== n) {
      count++;
      answer++;
      if (answer % 3 === 0 || answer.toString().includes('3')) {
        while (answer % 3 === 0 || answer.toString().includes('3')) {
          answer += 1;
        }
      }
    }
    return answer;
}