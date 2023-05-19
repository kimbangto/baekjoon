function solution(cacheSize, cities) {
    let answer = 0;
if(cacheSize === 0) return cities.length * 5;
const cache = [];

cities.forEach((city) => {
  const findIndex = cache.findIndex(
    (element) => element.toLowerCase() === city.toLowerCase()
  );
  if (findIndex === -1 && cache.length < cacheSize) {
    cache.push(city);
    answer += 5;
  } else if (findIndex === -1 && cache.length === cacheSize) {
    cache.shift();
    cache.push(city);
    answer += 5;
  } else if (findIndex !== -1) {
    cache.splice(findIndex, 1);
    cache.push(city);
    answer += 1;
  }
});
    return answer;
}