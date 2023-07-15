function solution(todo_list, finished) {
    var answer = [];
    finished.forEach((todo, index) => {
        if(todo === false) answer.push(todo_list[index]);
    })
    return answer;
}