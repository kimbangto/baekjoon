function solution(a, b) {
    var answer = 2;
    let GDC = (a,b) => {
    for(let i=a; 1<=i; i--) {
        if(a % i === 0 && b % i === 0) {
            return i;
        }
    }
}

b = b / GDC(a, b);

let array = [];
let i = 2;
while(!(b==1)) {
    if(b % i == 0) {
        array.push(i);
        b = b / i;
    } else {
        i++;
    }
}

if(array.find(num => num !=2 && num != 5) === undefined) answer = 1;
    return answer;
}