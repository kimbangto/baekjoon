function solution(sizes) {
    sizes.forEach((size) => size.sort((a, b) => a - b));

const garo = [];
const sero = [];

sizes.forEach((size) => sero.push(size[0]));
sizes.forEach((size) => garo.push(size[1]));

garo.sort((a, b) => a - b);
sero.sort((a, b) => a - b);
    return garo[garo.length-1] * sero[sero.length-1];
}