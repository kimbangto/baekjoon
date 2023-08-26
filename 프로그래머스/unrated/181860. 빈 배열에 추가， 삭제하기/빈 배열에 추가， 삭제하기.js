function solution(arr, flag) {
    const X = [];
    arr.forEach((num, index) => {
        if(flag[index]) {
            for(let i=1; i<=num*2; i++) X.push(num);
        }
        else {
            for(let i=1; i<=num; i++) X.pop();
        }
    })
    return X;
}