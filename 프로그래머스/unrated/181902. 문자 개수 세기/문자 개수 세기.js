function solution(my_string) {
    const answer = new Array(52).fill(0);
    for(let i=0; i<my_string.length; i++) {
        if('A' <= my_string[i] && my_string[i] <= 'Z') {
        answer[my_string.charCodeAt(i) - 65]++;
        } else {
            answer[my_string.charCodeAt(i) - 71]++;
        }
    }
    return answer;
}