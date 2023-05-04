function solution(s){
    
let count = 0;

for (let char of s) {
  char === '(' ? count++ : count--;
  if(count < 0) return false;
}
return count === 0 ? true : false;
}