function solution(quiz) {
    var answer = [];
    quiz.forEach((item) => {
    let split = item.split(' ');
    let x = Number(split[0]);
    let operator = split[1];
    let y = Number(split[2]);
    let z = Number(split[4]);
    console.log(x, operator, y, '=', z);
    let calc;
    if(operator == '+') {
        calc = x + y;
    } else {
        calc = x - y;
    }
    if(calc == z) {
        answer.push('O');
    } else {
        answer.push('X');
    }
})
    return answer;
}