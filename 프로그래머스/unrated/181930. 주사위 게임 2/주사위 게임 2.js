function solution(a, b, c) {
    const set = new Set([a,b,c]);
    if(set.size === 3) return a+b+c;
    if(set.size === 2) return (a+b+c) * (a*a + b*b + c*c);
    if(set.size === 1) return (a*3) * (a*a*3) * (a*a*a*3);
}