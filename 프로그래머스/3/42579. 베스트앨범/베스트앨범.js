function solution(genres, plays) {
  const result = [];

  const totalPlay = new Map();

  // [[장르, 인덱스, 재생횟수], ...]
  const joinedArr = [];

  genres.forEach((genre, index) => {
    if (!totalPlay.has(genre)) {
      totalPlay.set(genre, plays[index]);
    } else {
      totalPlay.set(genre, totalPlay.get(genre) + plays[index]);
    }
    joinedArr.push([index, genre, plays[index]]);
  });

  const genreSortedByPlay = Array.from(totalPlay).sort((a, b) => b[1] - a[1]);

  // 내림차순 된 장르 배열
  const genreOrder = genreSortedByPlay.map((value, index) => value[0]);

  genreOrder.forEach((order) => {
    const filltered = joinedArr
      .filter((joined) => joined[1] === order)
      .sort((a, b) => b[2] - a[2] || a[0] - b[0])
      .slice(0, 2);

    result.push(...filltered.map((value) => value[0]));

  });
    return result;
}