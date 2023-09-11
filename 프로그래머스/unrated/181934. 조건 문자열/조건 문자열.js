function solution(ineq, eq, n, m) {
    function trueOrFalse() {
            if(eq === '=') {
            if(ineq === '<') return (n <= m);
            else return (n >= m);
        } else {
            if(ineq === '<') return (n < m);
            else return (n > m);
        }
    }
    return trueOrFalse() ? 1 : 0;
}