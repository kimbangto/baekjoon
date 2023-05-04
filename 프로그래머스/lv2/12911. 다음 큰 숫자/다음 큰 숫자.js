function solution(n) {
    const yijinsu1 = n.toString(2).replaceAll('0', '').length;

while (true) {
  n++;
  if (yijinsu1 == n.toString(2).replaceAll('0', '').length) break;
}
    return n;
}