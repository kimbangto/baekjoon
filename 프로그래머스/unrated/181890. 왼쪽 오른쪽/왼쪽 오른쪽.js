function solution(str_list) {
    const lIndex = str_list.findIndex(char => char === 'l');
    const rIndex = str_list.findIndex(char => char === 'r');
    if(lIndex === -1 && rIndex === -1) return [];
    if(lIndex === -1) {
        return str_list.slice(rIndex+1, str_list.length);
    } else if(rIndex === -1) {
        return str_list.slice(0, lIndex);
    }
    return (lIndex < rIndex ? str_list.slice(0, lIndex) : (rIndex < lIndex ? str_list.slice(rIndex+1, str_list.length) : []))
}