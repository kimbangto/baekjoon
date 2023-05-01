function solution(x) {
    const arr = x.toString().split('');
    let total = 0;
    arr.forEach(item => total += Number(item));
    if(x % total === 0) return true;
    else return false;
}