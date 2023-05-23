function solution(arr, k) {
    var answer = [];
    arr.forEach(item => {
        k%2===0?answer.push(item+k):answer.push(item*k);
    })
    return answer;
}