function solution(l, r) {
    function is0or5(num) {
        const str = num.toString(10);
        if(str.replaceAll('5', '').replaceAll('0', '').length === 0) return true;
        else return false;
    }
    const nums = [];
    for(let i=l; i<=r; i++) if(i % 5 === 0) nums.push(i);
    const answer = nums.filter(num => is0or5(num));
    return (answer.length === 0 ? [-1] : answer);
}