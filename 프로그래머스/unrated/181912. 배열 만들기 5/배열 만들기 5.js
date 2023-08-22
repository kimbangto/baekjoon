function solution(intStrs, k, s, l) {
    const answer = [];
    intStrs.forEach(intStr => {
        const slice = Number(intStr.slice(s, s+l));
        if(k < slice) answer.push(slice);
    })
    return answer;
}