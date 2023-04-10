function solution(array) {
    let answer = -1;

let max = 0;

array.sort(function(a,b) {
    return a-b;
});

let arr = new Array(array[array.length-1]+1);
arr.fill(0);

for(let i=0; i<array.length; i++) {
    arr[array[i]]++;
}

for(let i=0; i<arr.length; i++) {
    if(arr[i] > arr[max]) {
        max = i;
    }
}

answer = max;

for(let i=max+1; i<arr.length; i++) {
    if(arr[i] === arr[max]) {
        answer = -1;
        break;
    }
}
    return answer;
}