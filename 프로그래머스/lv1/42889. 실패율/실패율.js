function solution(N, stages) {
    const stageInfo = (N) => {
      const info = [];
      for (let i = 1; i < N + 1; i++) {
        const failUser = stages.filter((stage) => stage === i).length;
        const passUser = stages.filter((stage) => i <= stage).length;
        info.push({
          stage: i,
          failure: failUser / passUser,
        });
      }
      return info;
    };

    const result = stageInfo(N).sort((b, a) => a.failure - b.failure);

    return result.map((obj) => obj.stage);
}