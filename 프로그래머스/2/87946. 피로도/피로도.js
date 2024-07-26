function solution(k, dungeons) {
  let answer = 0; // count

  // 방문기록
  const visited = new Array(dungeons.length).fill(false);

  function DFS(hp, count) {
    // 던전들 순회
    for (let i = 0; i < dungeons.length; i++) {
      // 가본적 없고 최소필요피로도가 현재피로도보다 작을때
      if (!visited[i] && dungeons[i][0] <= hp) {
        // 방문기록(후에 호출할 재귀함수에서 헛발질 안하게 함)
        visited[i] = true;

        // 현재 피로도에서 소모 피로도 빼주고, 카운트
        DFS(hp - dungeons[i][1], count + 1);

        // 방문기록 지워 다음 for 루프에서는 초기화
        visited[i] = false;
      }
    }
    answer = Math.max(answer, count);
  }

  DFS(k, 0);

  return answer;
}