function solution(picture, k) {
    const answer = [];
    picture.forEach(low => {
        let kTimes = '';
        for(const char of low) {
            kTimes += char.repeat(k);
        }
        for(let i=1; i<=k; i++) answer.push(kTimes);
    })
    return answer;
}