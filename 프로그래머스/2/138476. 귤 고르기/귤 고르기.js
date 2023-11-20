function solution(k, tangerine) {
    const map = new Map();
    tangerine.forEach(x => {
        if(!map.has(x)) map.set(x, 1);
        else map.set(x, map.get(x)+1);
    });
    const arr = Array.of(...map.entries());
    arr.sort((a,b) => b[1] - a[1]);
    let count = 0;
    let large = 0;
    for(let i=0; i<=arr.length; i++) {
        if(k <= count) return large;
        count += arr[i][1];
        large++;
    }
    return arr.length;
}