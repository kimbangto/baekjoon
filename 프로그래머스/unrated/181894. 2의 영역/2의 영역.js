function solution(arr) {
    const isTrue = (num) => (num === 2);
    if(arr.find(isTrue) === undefined) return [-1];
    else {
        const reverseArr = Array.from(arr);
        reverseArr.reverse();
        
        const start = arr.findIndex(isTrue);
        const end = arr.length - reverseArr.findIndex(isTrue);
        
        return arr.slice(start, end);
    }
}