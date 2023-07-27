function solution(lines) {
    lines.sort((a, b) => a[0] - b[0]);
    const duplicate = [];
    for (let i = 0; i < lines.length; i++) {
      for (let j = i + 1; j < lines.length; j++) {
        const gap = lines[i][1] - lines[j][0];
        if (0 < gap)
          duplicate.push([lines[j][0], Math.min(lines[i][1], lines[j][1])]);
      }
    }

    if (duplicate.length === 0) {
      return 0;
    }
    let stick = Math.max(...duplicate.flat()) - Math.min(...duplicate.flat());

    if (duplicate.length === 1) return stick;
    else if (2 <= duplicate.length) {
      for (let i = 0; i < duplicate.length; i++) {
        for (let j = i + 1; j < duplicate.length; j++) {
          const gap = duplicate[i][1] - duplicate[j][0];
          if (gap < 0) stick -= Math.abs(gap);
        }
      }
    }
    return stick;
}