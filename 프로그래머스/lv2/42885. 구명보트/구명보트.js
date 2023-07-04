function solution(people, limit) {
    people.sort((a, b) => a - b);

let count = 0;

while (people.length !== 0) {
  if (people[0] + people[people.length - 1] <= limit) {
    people.shift();
    people.pop();
    count++;
  } else {
    people.pop();
    count++;
  }
  if (people.length === 1) {
    count++;
    break;
  }
}
    return count;
}