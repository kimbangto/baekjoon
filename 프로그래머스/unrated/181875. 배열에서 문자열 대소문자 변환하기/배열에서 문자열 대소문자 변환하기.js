function solution(strArr) {
    var answer = [];
    strArr.forEach((str, i) => {
        if(i % 2 === 0) answer.push(str.toLowerCase());
        else answer.push(str.toUpperCase());
    })
    return answer;
}