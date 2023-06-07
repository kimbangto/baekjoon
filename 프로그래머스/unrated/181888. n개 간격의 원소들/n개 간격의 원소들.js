function solution(num_list, n) {
    const answer = [];
    num_list.forEach((num, index) => {
        if(index % n === 0) answer.push(num);
    })
    return answer;
}