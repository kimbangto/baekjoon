function solution(str1, str2) {
    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();

    const makeMultiSet = (str) => {
      const multiSet = [];
      const split = str.split('');
      for (let i = 0; i < split.length - 1; i++) {
        if (/[A-Z][A-Z]/.test(split[i] + split[i + 1]))
          multiSet.push(split[i] + split[i + 1]);
      }
      return multiSet;
    };

    const multiSet1 = makeMultiSet(str1);
    const multiSet2 = makeMultiSet(str2);
    
    if(multiSet1.length === 0 && multiSet2.length === 0) return 65536;

    const set = new Set(multiSet1.concat(multiSet2));

    const makeMap = (multiSet) => {
      const map = new Map();
      multiSet.forEach((word) => {
        map.has(word) ? map.set(word, map.get(word) + 1) : map.set(word, 1);
      });
      return map;
    };

    const map1 = makeMap(multiSet1);
    const map2 = makeMap(multiSet2);

    let intersectionLength = 0;
    let unionLength = 0;

    set.forEach((word) => {
      const map1Num = map1.get(word) ? map1.get(word) : 0;
      const map2Num = map2.get(word) ? map2.get(word) : 0;

      intersectionLength += Math.min(map1Num, map2Num);
      unionLength += Math.max(map1Num, map2Num);
    });
    
    return Math.floor(intersectionLength / unionLength * 65536);
}