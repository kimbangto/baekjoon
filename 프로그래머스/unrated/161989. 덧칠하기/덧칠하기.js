function solution(n, m, section) {
    let answer = 0;

    while (section.length !== 0) {
      if (section.length === 1) {
        answer++;
        section.pop();
        break;
      }
      let nextIndex = 0;
      while (section[nextIndex] - section[0] + 1 <= m) {
        if (section[nextIndex + 1] - section[0] + 1 <= m) nextIndex++;
        else break;
      }
      section.splice(0, nextIndex + 1);
      answer++;
    }
    return answer;
}