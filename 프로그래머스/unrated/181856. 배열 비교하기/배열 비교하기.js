function solution(arr1, arr2) {
    var answer = 0;
    if(arr1.length < arr2.length) return -1;
    else if(arr1.length > arr2.length) return 1;
    else {
            if(arr1.reduce((acc, cur) => acc + cur) < arr2.reduce((acc, cur) => acc + cur)) return -1;
            else if(arr1.reduce((acc, cur) => acc + cur) > arr2.reduce((acc, cur) => acc + cur)) return 1;
            else return 0;
    }
    return answer;
}