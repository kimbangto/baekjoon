function solution(dartResult) {
    const arr = dartResult.split(/(\d+[SDT][*#]*)/).filter((item) => item !== '');

    const result = [];

    arr.forEach((item, index) => {
      item.includes('S')
        ? result.push(parseInt(item))
        : item.includes('D')
        ? result.push(parseInt(item) ** 2)
        : result.push(parseInt(item) ** 3);

      if (item.includes('#')) result[index] *= -1;
      if (item.includes('*')) {
        if (index === 0) result[index] *= 2;
        else {
          result[index - 1] *= 2;
          result[index] *= 2;
        }
      }
    });
    
    return result.reduce((arr, cur) => arr + cur, 0);
}