function solution(arr) {
    const column = arr.length;
    const row = arr[0].length;
    console.log(column, row);
    if(column < row) {
        const pushArr = new Array(row).fill(0);
        for(let i=1; i<=row-column; i++) arr.push(pushArr);
    } else if(row < column) {
        arr.forEach(array => {
            for(let i=1; i<=column-row; i++) array.push(0);
        })
    }
    return arr;
}