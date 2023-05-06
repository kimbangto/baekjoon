function solution(brown, yellow) {
    const hap = brown + yellow;
    for (let i = 1; i <= hap / i; i++) {
  if (hap % i === 0) {
    if ((i - 2) * (hap / i - 2) === yellow) {
      if(i<hap/i) return [hap/i, i];
      else return [i, hap/i]
    }
  }
}
}