function solution(clothes) {
    const map = new Map();
    clothes.forEach((item) => {
      if (map.has(item[1])) map.set(item[1], map.get(item[1]) + 1);
      else map.set(item[1], 1);
    });

    const arr = Array.of(...map.values());

    const result = arr.reduce((acc, cur) => acc * (cur + 1), 1) - 1;
    
    return result;
}