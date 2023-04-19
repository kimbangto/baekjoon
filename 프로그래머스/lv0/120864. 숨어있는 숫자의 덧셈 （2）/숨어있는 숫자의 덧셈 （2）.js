function solution(my_string) {
    let num = '';
let answer = 0;
for(let i=0; i<=my_string.length; i++) {
    if(i === my_string.length) {
        answer += Number(num);
    } else if (!isNaN(my_string[i])) {
        num += my_string[i];
    } else {
        answer += Number(num);
        num = '';
    }
}
    return answer;
}