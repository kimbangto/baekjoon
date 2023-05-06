function solution(n, words) {
    const words2 = [words[0]];

for (let i = 1; i < words.length; i++) {
  if (
    words2.includes(words[i]) ||
    words2.at(-1).at(-1) !== words[i].at(0) ||
    words[i].length < 2
  ) {
    return [(i % n) + 1, Math.floor(i / n + 1)];
  } else {
    words2.push(words[i]);
  }
}

return [0, 0];

}