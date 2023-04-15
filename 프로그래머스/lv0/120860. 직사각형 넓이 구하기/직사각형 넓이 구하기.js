function solution(dots) {
    let setX = new Set();
let setY = new Set();

let garo = [];
let sero = [];

for(let i=0; i<4; i++) {
    setX.add(dots[i][0]);
    setY.add(dots[i][1]);
}

setX.forEach((value) => garo.push(value));
setY.forEach((value) => sero.push(value));

let answer = Math.abs(garo[0]-garo[1]) * Math.abs(sero[0]-sero[1]);
    return answer;
}