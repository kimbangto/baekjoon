function solution(prices) {
    const result = [];
    for(let i=0; i<prices.length; i++) {
        const target = prices[i];
        let count = 0;
        for(let j=i+1; j<prices.length; j++) {
            count++;
            if(prices[j] < target) {
                break;
            }
        }
        result.push(count);
    }
    return result;
}