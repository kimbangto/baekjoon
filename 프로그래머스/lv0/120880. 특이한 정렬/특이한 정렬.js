function solution(numlist, n) {
    return   numlist
    .sort((a, b) => a - b)
    .sort((b, a) => Math.abs(a - n) - Math.abs(b - n))
    .reverse();
}