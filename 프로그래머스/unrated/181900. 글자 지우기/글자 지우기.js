function solution(my_string, indices) {
    const split = my_string.split('');
    indices.forEach(i => {
        split[i] = '';
    })
    return split.join('');
}