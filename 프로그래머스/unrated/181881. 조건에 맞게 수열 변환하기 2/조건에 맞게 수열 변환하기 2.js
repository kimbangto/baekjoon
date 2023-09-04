function solution(arr) {
  let count = 0;
  while (count !== 10) {
    const arrCopy = Array.from(arr);
    for (let i = 0; i < arrCopy.length; i++) {
      if (50 <= arrCopy[i] && arrCopy[i] % 2 === 0) arrCopy[i] /= 2;
      else if (arrCopy[i] < 50 && arrCopy[i] % 2 !== 0) arrCopy[i] = arrCopy[i] * 2 + 1;
    }
    console.log(count, arrCopy);
    if (JSON.stringify(arr) === JSON.stringify(arrCopy)) return count;
    else arr = arrCopy;
    count++;
  }
}