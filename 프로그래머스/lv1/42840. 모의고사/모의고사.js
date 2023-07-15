function solution(answers) {
    const numberOne = (answers) => {
      let score = 0;
      const answer = '12345'.repeat(Math.ceil(answers.length / 5)).split('');
      answers.forEach((num, index) => {
        if (num == answer[index]) score++;
      });
      return score;
    };
    const numberTwo = (answers) => {
      let score = 0;
      const answer = '21232425'.repeat(Math.ceil(answers.length / 8)).split('');
      answers.forEach((num, index) => {
        if (num == answer[index]) score++;
      });
      return score;
    };
    const numberThree = (answers) => {
      let score = 0;
      const answer = '3311224455'.repeat(Math.ceil(answers.length / 10)).split('');
      answers.forEach((num, index) => {
        if (num == answer[index]) score++;
      });
      return score;
    };

    const compare = () => {
      const scores = [
        [1, numberOne(answers)],
        [2, numberTwo(answers)],
        [3, numberThree(answers)],
      ];
        scores.sort((b,a) => a[1] - b[1]);
      if (scores[0][1] === scores[1][1]) {
        if (scores[1][1] === scores[2][1])
          return [scores[0][0], scores[1][0], scores[2][0]].sort((a, b) => a[0] - b[0]);
        else return [scores[0][0], scores[1][0]].sort((a, b) => a[0] - b[0]);
      } else return [scores[0][0]];
    };
    return compare();
}