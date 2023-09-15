function solution(arr, k) {
    const result = [];
    for(let i=0; i<arr.length; i++) {
        if(!result.includes(arr[i])) result.push(arr[i]);
        if(result.length === k) return result;
    }
    while(result.length < k) {
        result.push(-1);
    }
    return result;
}