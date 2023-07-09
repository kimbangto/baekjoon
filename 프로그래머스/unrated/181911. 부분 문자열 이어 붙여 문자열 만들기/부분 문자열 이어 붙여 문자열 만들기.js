function solution(my_strings, parts) {
    var answer = '';
    my_strings.forEach((str, index) => {
        answer += str.slice(parts[index][0], parts[index][1]+1);
    })
    return answer;
}