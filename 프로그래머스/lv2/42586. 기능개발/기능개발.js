function solution(progresses, speeds) {
    const answer = [];

progresses.reverse();
speeds.reverse();

while (progresses.length !== 0) {
  for (let i = 0; i < progresses.length; i++) {
    progresses[i] += speeds[i];
  }
  if (100 <= progresses[progresses.length - 1]) {
    let count = 0;
    while (100 <= progresses[progresses.length - 1]) {
      count++;
      progresses.pop();
    }
    answer.push(count);
  }
}
    return answer;
}