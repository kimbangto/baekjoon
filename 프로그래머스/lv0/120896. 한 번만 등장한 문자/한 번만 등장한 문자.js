function solution(s) {
    let string = '';

const set = new Set(s);
const map = new Map();

for(let value of set) {
    map.set(value, 0);
}

for(let i=0; i<s.length; i++) {
    map.set(s.charAt(i), map.get(s.charAt(i))+1);
}

map.forEach((value, key, map) => {
    if(value == 1) {
        string += key;
    }
})

const answerArray = string.split('');

answerArray.sort();
let answer = '';

for(let i=0; i<answerArray.length; i++) {
    answer += answerArray[i];
}
    return answer;
}