function solution(arr1, arr2) {
    let a = Array.of(...arr1);
    let b = Array.of(...arr2);
    if(arr1[0].length !== arr2.length) {
        b = Array.of(...arr2);
        a = Array.of(...arr1);
    }
    const result = [];
    for(let i=0; i<a.length; i++) {
        const arr = [];
        for(let j=0; j<b[0].length; j++) {
            let count = 0;
            for(let k=0; k<a[0].length; k++) {
                count += a[i][k]*b[k][j];
            }
            arr.push(count);
        }
        result.push(arr);
    }
    return result;
}