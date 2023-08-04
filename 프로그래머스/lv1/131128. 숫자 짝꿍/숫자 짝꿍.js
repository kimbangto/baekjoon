function solution(X, Y) {
    const splitX = X.split('');
    const splitY = Y.split('');

    const set = new Set([...splitX, ...splitY].sort((b, a) => a - b));
    
    let result = '';

    set.forEach((num) => {
      if (splitX.includes(num) && splitY.includes(num)) {
        result = result.concat(
          num.repeat(
            Math.min(
              splitX.filter((item) => item === num).length,
              splitY.filter((item) => item === num).length
            )
          )
        );
      }
    });
    
    if(result.length === 0) return '-1';
    if(result.replaceAll('0', '').length === 0) return '0';

    return result;
}