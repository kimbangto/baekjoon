function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const directions = [
    [0, 1], // 동
    [0, -1], // 서
    [1, 0], // 남
    [-1, 0], // 북
  ];

  const bfs = () => {
    const queue = [[0, 0, 1]]; // 시작점, 거리([0,0]에서 시작, 1칸)
    const visited = Array.from(Array(n), () => Array(m).fill(false));
    visited[0][0] = true; // 시작지점 방문경로에 추가

    while (queue.length) {
      const [x, y, distance] = queue.shift();

      if (x === n - 1 && y === m - 1) {
        // 목표지점 도달
        return distance;
      }

      for (const [dx, dy] of directions) {
        const nx = x + dx; // nx, ny =>
        const ny = y + dy; // 동or서or남or북 으로 한칸 움직인 좌표

        if (
          0 <= nx &&
          nx < n && //
          0 <= ny &&
          ny < m && // 지도 범위(0 ~ n or m) 안쪽
          maps[nx][ny] === 1 && // 막혀있지 않은 길
          !visited[nx][ny] // 가보지 않은 길
        ) {
          queue.push([nx, ny, distance + 1]);
          visited[nx][ny] = true;
        }
      }
    }

    return -1; // 목표지점 도달 불가능
  };

  return bfs();
}