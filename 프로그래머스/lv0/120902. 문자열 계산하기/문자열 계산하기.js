function solution(my_string) {
    const arr = my_string.split(' ');

for(let i=0; i<arr.length; i++) {
    if(arr[i] === '+') {
        arr.splice(i-1, 3, parseInt(arr[i-1]) + parseInt(arr[i+1]));
    } else if(arr[i] === '-') {
        arr.splice(i-1, 3, parseInt(arr[i-1]) - parseInt(arr[i+1]));
    }
    if(arr.length > 0) {
        i = 0;
    } else {
        break;
    }
}

const answer = arr[0];
    return answer;
}