function solution(s) {
    let ss = s;

let count = 0;
let countZero = 0;

function ziral() {
  while (ss !== '1') {
    count++;
    while (ss.includes('0')) {
      ss = ss.replace('0', '');
      countZero++;
    }
    ss = ss.length.toString(2);
  }
}

ziral();
    return [count, countZero];
}