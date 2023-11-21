function solution(msg) {
  const answer = [];
  const dic = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  loop: while (msg !== '') {
    const length = msg.length;
    for (let j = 1; j <= length; j++) {
      const w = msg.slice(0, j);
      const c = msg.slice(j, j + 1);
      if (j === length) {
        answer.push(dic.indexOf(w) + 1);
        break loop;
      }
      if (dic.includes(w + c)) {
        continue;
      } else {
        answer.push(dic.indexOf(w) + 1);
        dic.push(w + c);
        msg = msg.replace(w, '');
        break;
      }
    }
  }
    return answer;
}