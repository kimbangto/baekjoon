function solution(my_string, queries) {
    let answer = '';
    const split = my_string.split('');
    queries.forEach(query => {
        split.splice(query[0], query[1]-query[0]+1, ...split.slice(query[0], query[1]+1).reverse());
    })
    return split.join('');
}