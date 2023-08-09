function solution(s) {
    let target = s[0];
    let targetCount = 0;
    let nontargetCount = 0;
    let result = 0;

    for (let i = 0; i < s.length - 1; i++) {
      if (s[i] === target) targetCount++;
      else nontargetCount++;

      if (targetCount === nontargetCount) {
        result++;
        target = s[i + 1];
        targetCount = 0;
        nontargetCount = 0;
      }
    }

    return result+1;
}