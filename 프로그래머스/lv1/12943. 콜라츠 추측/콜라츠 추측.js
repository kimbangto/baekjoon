function solution(num) {
    let n = num;
let count = 0;

while (n !== 1) {
  if (n % 2 === 0) {
    n = n / 2;
    count++;
  } else {
    n = n * 3 + 1;
    count++;
  }
}

if(500 < count) {
    return -1;
} else {
    return count;
}

}