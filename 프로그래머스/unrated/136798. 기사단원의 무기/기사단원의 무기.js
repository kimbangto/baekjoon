function solution(number, limit, power) {
    function weapon(num) {
      // num의 약수 개수를 리턴하는 함수
      if (num === 1) return 1;
      let n = num;
      let i = 2;
      const map = new Map();
      while (n !== 1) {
        if (n % i === 0) {
          if (map.has(i)) map.set(i, map.get(i) + 1);
          else map.set(i, 1);
          n = n / i;
          i = 2;
        } else i += 1;
      }
      const arr = Array.of(...map.values());
      return arr.reduce((acc, cur) => acc * (cur + 1), 1);
    }

    const knights = [];

    for (let i = 1; i <= number; i++) {
      const attack = weapon(i);
      knights.push(limit < attack ? power : attack);
    }

    return (knights.reduce((prev, curr) => prev + curr, 0));
}