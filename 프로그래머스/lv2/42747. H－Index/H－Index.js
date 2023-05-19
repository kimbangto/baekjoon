function solution(citations) {
    let answer = 0;
for (let i = citations.length; 0 < i; i--) {

  const quoted = citations.filter((count) => i <= count);
  const unquoted = citations.filter((count) => i > count);

  if (i <= quoted.length && unquoted.length < i) {
    answer = i;
      break;
  }
}
    return answer;
}