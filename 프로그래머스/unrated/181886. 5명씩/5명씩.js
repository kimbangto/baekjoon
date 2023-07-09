function solution(names) {
    var answer = [];
    names.forEach((man, index) => {
        if(index % 5 === 0) answer.push(man);
    })
    return answer;
}