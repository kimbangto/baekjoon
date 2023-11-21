function solution(operations) {
  const result = [];

  operations.forEach((oper) => {
    const split = oper.split(' ');
    const word = split[0];
    const num = Number(split[1]);

    if (word === 'I') {
      result.push(num);
    } else {
      if (result.length !== 0) {
        if (num === -1) result.splice(result.indexOf(Math.min(...result)), 1);
        else result.splice(result.indexOf(Math.max(...result)), 1);
      }
    }
  });

  return result.length === 0 ? [0, 0] : [Math.max(...result), Math.min(...result)];
}