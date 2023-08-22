function solution(arr, queries) {
    queries.forEach(query => {
        arr = arr.map((num, index) => (query[0]<=index&&index<=query[1]?num+1:num));
    })
    return arr;
}