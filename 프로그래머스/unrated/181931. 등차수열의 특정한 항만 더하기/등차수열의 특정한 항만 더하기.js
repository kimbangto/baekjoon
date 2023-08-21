function solution(a, d, included) {
    let answer = 0;
    included.forEach((item, index) => {
        if(item === true) answer += a + d * index;
    })
    return answer;
}