function solution(arr, queries) {
    queries.forEach(query => {
        const queryOne = arr[query[0]];
        arr[query[0]] = arr[query[1]];
        arr[query[1]] = queryOne;
    })
    return arr;
}