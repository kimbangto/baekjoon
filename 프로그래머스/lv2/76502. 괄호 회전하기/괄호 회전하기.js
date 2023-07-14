function solution(s) {
    let answer = 0;
    
    const regex = /\(\)|\{\}|\[\]/g;

    for (let i = 0; i < s.length; i++) {
      let sTurn = s;
      sTurn = sTurn.slice(i).concat(sTurn.slice(0, i));
      while (sTurn.includes('()') || sTurn.includes('[]') || sTurn.includes('{}')) {
        sTurn = sTurn.replaceAll(regex, '');
      }
      if (sTurn.length === 0) answer++;
    }
    return answer;
}