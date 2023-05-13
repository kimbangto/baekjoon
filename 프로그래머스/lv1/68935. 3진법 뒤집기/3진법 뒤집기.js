function solution(n) {
    const trinary = n.toString(3).split('').reverse().join().replaceAll(',', '');
    return parseInt(trinary, 3);
}