function solution(emergency) {
    const result = new Array(emergency.length);
result.fill(1);
for(let i=0; i<emergency.length; i++) {
    for(let j=i+1; j<emergency.length; j++) {
        if(emergency[i] < emergency[j]) {
            result[i]++;
        } else {
            result[j]++;
        }
    }
}
    return result;
}