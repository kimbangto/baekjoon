function solution(chicken) {
    let coupon = chicken;
let service = 0;
let answer = 0;

while(10 <= coupon) {
    service = Math.floor(coupon / 10);
    coupon = (coupon % 10) + service;
    answer += service;
    console.log(`서비스: ${service}, 쿠폰: ${coupon}`);
}

console.log(answer);
    return answer;
}