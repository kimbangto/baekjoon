function solution(num_list) {
    let answer;
    if(num_list.length <= 10) {
        answer = 1;
        num_list.forEach(num => answer *= num);
    } else {
        answer = 0;
        num_list.forEach(num => answer += num);
    }
    return answer;
}