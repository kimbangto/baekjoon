function solution(polynomial) {
    const split = polynomial.split(' ');
let x = 0;;
let num = 0;

split.forEach((item) => {
    if(item.includes('x')) {
        if(item === 'x') {
            item = '1x';
        }
        x += Number(item.slice(0,item.length-1));
    } else if(item !== '+') {
        num += Number(item);
    } 
})

console.log(`${x}x + ${num}`);

let answer = '';

if(x == 1 && num != 0) {
    answer = `x + ${num}`;
} else if(x == 1 && num == 0) {
    answer = `x`;  
} else if(x == 0) {
    answer = `${num}`;
} else if(num == 0) {
    answer = `${x}x`;
} else {
    answer = `${x}x + ${num}`;
}
    return answer;
}