function solution(lottos, win_nums) {
    const prize = (correct) => {
      switch (correct) {
        case 6:
          return 1;
        case 5:
          return 2;
        case 4:
          return 3;
        case 3:
          return 4;
        case 2:
          return 5;
        default:
          return 6;
      }
    };

    const countCorrect = () => {
      const certain = lottos.filter((num) => num !== 0);
      let correct = 0;
      certain.forEach((num) => {
        if (win_nums.findIndex((winNum) => winNum === num) !== -1) correct++;
      });
      return correct;
    };

    const uncertain = lottos.filter((num) => num === 0).length;

    return [prize(countCorrect() + uncertain), prize(countCorrect())];
}