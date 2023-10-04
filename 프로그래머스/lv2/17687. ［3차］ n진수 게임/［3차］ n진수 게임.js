function solution(n, t, m, p) {
  // 진법 n, 미리 구할 숫자의 갯수 t, 게임에 참가하는 인원 m, 튜브의 순서 p

  const game = [];
  let currentNumber = 0;

  // 튜브 순서 구하기
  const tubeTurn = [];
  let tubeIndex = p - 1;
  while (tubeTurn.length !== t) {
    tubeTurn.push(tubeIndex);
    tubeIndex += m;
  }
  // console.log(tubeTurn);

  while (game.length <= tubeTurn[tubeTurn.length - 1]) {
      
    game.push(...currentNumber.toString(n).split(''));
    currentNumber++;
  }

  // console.log(game);

  // 튜브것만 뽑아내기
  const tube = [];
  tubeTurn.forEach((i) => {
    tube.push(game[i]);
  });

  return tube.join('').toUpperCase();
}