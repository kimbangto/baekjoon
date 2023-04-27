function solution(arr) {
    let total = 0;
arr.forEach((item) => (total += item));
    return total / arr.length;
}