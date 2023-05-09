function solution(s) {
    if(s.length % 2 !== 0) {
  return s.charAt(Math.floor(s.length/2));
} else {
  return s.slice(s.length / 2 - 1, s.length / 2 + 1);
}
}