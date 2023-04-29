function solution(s){
    let pcount = 0;
let ycount = 0;

s.toLowerCase()
  .split('')
  .forEach((item) => {
    if (item === 'p') {
      pcount++;
    } else if (item === 'y') {
      ycount++;
    }
  });
if (pcount === ycount) {
  return true;
} else {
  return false;
}

}