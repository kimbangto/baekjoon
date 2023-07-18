function solution(arr, delete_list) {
    var answer = [];
    arr.forEach(num => {
        if(delete_list.find(deleteNum => deleteNum === num) === undefined) answer.push(num);
    })
    return answer;
}