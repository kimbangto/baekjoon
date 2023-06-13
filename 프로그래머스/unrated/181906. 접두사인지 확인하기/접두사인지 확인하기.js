function solution(my_string, is_prefix) {
    for(let i=1; i<my_string.length; i++) {
        if(is_prefix === my_string.slice(0, i)) {
            return 1;
        }
    }
    return 0;
}