function solution(maps) {

  const n = maps.length;
  const m = maps[0].length;

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const visited = Array.from(Array(n), () => Array.from(Array(m)).fill(false));
  visited[0][0] = true;

  const bfs = () => {
    const queue = [[0, 0, 1]]; // 시작좌표, 움직인거리

    while (0 < queue.length) {
      let here = queue.shift();

      if (here[0] === n - 1 && here[1] === m - 1) {
        return here[2];
      }

      let [oldN, oldM, move] = here;

      directions.forEach((direction) => {
        newN = oldN + direction[0];
        newM = oldM + direction[1];

        if (0 <= newN && newN < n && 0 <= newM && newM < m && maps[newN][newM] === 1 && !visited[newN][newM]) {
          queue.push([newN, newM, move + 1]);
          visited[newN][newM] = true;
        }
      });
    }

    return -1;
  };

  return bfs();
}