function solution(n) {
    var answer = '';
    const array = n.toString().split('');
    array.sort((b,a)=>(a-b));
    array.forEach(item => answer+=item);
    return Number(answer);
}