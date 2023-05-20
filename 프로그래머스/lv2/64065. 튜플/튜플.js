function solution(s) {
    var answer = [];
    const arr = JSON.parse(s.replaceAll('{', '[').replaceAll('}',']'));
    arr.sort((a,b) => a.length - b.length);
    const set = new Set();
    arr.forEach(item => {
       item.forEach(num => {
           set.add(num);
       }) 
    });
    set.forEach(item => answer.push(item));
    return answer;
}