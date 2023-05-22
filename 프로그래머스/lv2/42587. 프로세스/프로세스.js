function solution(priorities, location) {
    var answer = 0;
    while (priorities.length !== 0) {
      if (
        location === 0 &&
        priorities[location] === Math.max.apply(null, priorities)
      ) {
        answer++;
        break;
      }
      if (Math.max.apply(null, priorities) !== priorities[0]) {
        priorities.push(priorities[0]);
      } else {
        answer++;
      }
      priorities.shift();
      if (location === 0) {
        location = priorities.length - 1;
      } else location--;
    }
    return answer;
}