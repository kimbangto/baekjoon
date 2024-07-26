function solution(land) {
  const n = land.length;
  const m = land[0].length;

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const visited = Array.from(Array(n), () => Array(m).fill(0));

  const oilInfo = new Map();

  const bfs = (queue) => {
    let oilCount = 1;
    while (0 < queue.length) {
      let [a, b] = queue.shift();

      for (const [di, dj] of directions) {
        const newI = a + di;
        const newJ = b + dj;

        if (0 <= newI && newI < n && 0 <= newJ && newJ < m && land[newI][newJ] === 1 && visited[newI][newJ] === 0) {
          queue.push([newI, newJ]);
          visited[newI][newJ] = index;
          oilCount++;
        }
      }
    }
    oilInfo.set(index, oilCount);
    index++;
  };

  let index = 1;

  for (let a = 0; a < n; a++) {
    for (let b = 0; b < m; b++) {
      if (visited[a][b] === 0 && land[a][b] === 1) {
        const queue = [[a, b]];
        visited[a][b] = index;
        bfs(queue);
      }
    }
  }

  const result = [];

  for (let i = 0; i < m; i++) {
    const oilSet = new Set();
    for (let j = 0; j < n; j++) {
      if (visited[j][i] !== 0) oilSet.add(visited[j][i]);
    }
    result.push(
      Array.from(oilSet)
        .map((value) => oilInfo.get(value))
        .reduce((prev, curr) => prev + curr, 0)
    );
  }

  return (Math.max(...result));
}