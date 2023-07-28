function solution(dots) {
    for (let i = 0; i < 3; i++) {
      const line2 = dots.slice(1, 4);
      const line1 = [dots[0]].concat(line2.splice(i, 1));
      const line1x = line1[1][0] - line1[0][0];
      const line1y = line1[1][1] - line1[0][1];
      const angle1 = line1x / line1y;
      const line2x = line2[1][0] - line2[0][0];
      const line2y = line2[1][1] - line2[0][1];
      const angle2 = line2x / line2y;
      if (angle1 === angle2) return 1;
    }
    return 0;
}