function solution(keymap, targets) {
    const result = [];

    targets.forEach((target) => {
      let count = 0;
      for (const char of target) {
        const keyCount = keymap.map((key) => key.indexOf(char)).filter((num) => num !== -1);
        if (keyCount.length === 0) {
          count = -1;
          break;
        } else {
          count += Math.min(...keyCount) + 1;
        }
      }
      result.push(count);
    });
    
    return result;
}