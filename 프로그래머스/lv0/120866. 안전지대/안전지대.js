function solution(board) {
    const n = board.length;
    for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board.length; j++) {
    if (board[i][j] === 1) {
      dangerZone(i, j);
    }
  }
}

console.log(board);

function dangerZone(i, j) {
  // i-1줄, i줄, i+1줄에서
  // j-1,j,j+1 위험지역으로 색칠(2로 변경)
  // 타겟이 1이면 변경하지 않기
  for (let t = i - 1; t <= i + 1; t++) {
    if (t < 0 || n <= t) {
      continue;
    }
    for (let r = j - 1; r <= j + 1; r++) {
      if (r < 0 || n <= r) {
        continue;
      }
      if (board[t][r] === 1) {
        continue;
      } else {
        board[t][r] = 2;
      }
    }
  }
}
let answer = 0;
board.forEach((item) => {
  item.forEach((item2) => {
    if (item2 === 0) {
      answer++;
    }
  });
});
    return answer;
}