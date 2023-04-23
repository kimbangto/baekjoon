function solution(numbers, k) {
    let cycle = [];

if (numbers.length % 2 === 0) {
  numbers.forEach((item, index) => {
    if (index % 2 === 0) {
      cycle.push(item);
    }
  });
} else {
  numbers.forEach((item, index) => {
    if (index % 2 === 0) {
      cycle.push(item);
    }
  });
  numbers.forEach((item, index) => {
    if (index % 2 === 1) {
      cycle.push(item);
    }
  });
}

console.log(`cycle: ${cycle}, cycleLength: ${cycle.length}, ${k}번째 공`);

let answer = 0;
if (k % cycle.length === 0) {
  answer = cycle[cycle.length - 1];
} else {
  answer = cycle[(k % cycle.length) - 1];
}
    return answer;
}