function solution(arr, queries) {
    let answer = Array(queries.length);
answer.fill(-1);

//

for (let n = 0; n < queries.length; n++) {
  let iarray = [];
  for (let i = queries[n][0]; i <= queries[n][1]; i++) {
    iarray.push(arr[i]);
  }
  iarray.sort((a, b) => a - b);
  for (let j = 0; j < iarray.length; j++) {
    if (iarray[j] > queries[n][2]) {
      answer[n] = iarray[j];
      break;
    }
  }
}
    return answer;
}