function solution(n) {
    if(n <= 2) return n % 1234567;
    let a = 1;
    let b = 2;
    for(let i=3; i<=n; i++) {
        [a, b] = [b, a];
        b = (a + b) % 1234567;
    }
    return b;
}