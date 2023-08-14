function solution(babbling) {
    const say = ['aya', 'ye', 'woo', 'ma'];
    let answer = 0;

    function double(babyword) {
      for (const saying of say) {
        if (babyword.includes(saying.repeat(2))) return false;
      }
      return true;
    }

    babbling
      .filter((babyword) => double(babyword))
      .forEach((babyword) => {
        let targetWord = babyword;
        say.forEach((saying) => {
          targetWord = targetWord.replaceAll(saying, ' ');
        });
        if (targetWord.replaceAll(' ', '').length === 0) answer++;
      });
    
    return answer;
}