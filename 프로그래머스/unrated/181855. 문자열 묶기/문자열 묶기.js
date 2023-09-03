function solution(strArr) {
    const maped = strArr.map(x => x.length);
    const map = new Map();
    maped.forEach(x => {
        if(map.has(x)) map.set(x, map.get(x) + 1);
        else map.set(x, 1);
    })
    return Math.max(...map.values());
}