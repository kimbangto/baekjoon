function solution(a, b, c, d) {
    const map = new Map();
    [a,b,c,d].forEach((num) => {
        if(map.has(num)) map.set(num, map.get(num) + 1);
        else map.set(num, 1);
    })
    const arr = Array.of(...map);
    arr.sort((b,a) => a[1] - b[1]);
    console.log(arr);
    
    if(arr[0][1] === 4) return 1111 * arr[0][0];
    if(arr[0][1] === 3) return (10 * arr[0][0] + arr[1][0]) ** 2;
    if(arr[0][1] === 2 && arr[1][1] === 2) return (arr[0][0] + arr[1][0]) * Math.abs(arr[0][0] - arr[1][0]);
    if(arr[0][1] === 2 && arr[1][1] === 1) return arr[1][0] * arr[2][0];
    if(arr[0][1] === 1) {
        const filter = [];
        arr.forEach((num) => filter.push(num[0]));
        return Math.min(...filter);
    }
}