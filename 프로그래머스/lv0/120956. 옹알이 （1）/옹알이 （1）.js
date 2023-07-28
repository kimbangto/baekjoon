function solution(babbling) {
    const babyWords = ['aya', 'ye', 'woo', 'ma'];
    let answer = 0;
    babbling.forEach((saying) => {
      let target = saying;
      babyWords.forEach((word) => {
        target = target.replace(word, ' ');
      });
      target = target.replaceAll(' ', '');
      if (target.length === 0) answer++;
    });
    return answer;
}