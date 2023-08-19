function solution(number) {
    return number.split('').map(item => Number(item)).reduce((acc, cur) => acc + cur, 0) % 9;
}