function solution(board, moves) {
    const bucket = [];
    let answer = 0;

    moves.forEach((num) => {
      for (const target of board) {
        if (target[num - 1] !== 0) {
          if (bucket[bucket.length - 1] === target[num - 1]) {
            bucket.pop();
            answer++;
          } else {
            bucket.push(target[num - 1]);
          }
          target[num - 1] = 0;
          break;
        }
      }
    });
    
    return answer * 2;
}