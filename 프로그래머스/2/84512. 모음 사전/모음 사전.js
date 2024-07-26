function solution(word) {
  const words = ['A', 'E', 'I', 'O', 'U'];
  const maxLength = 5;

  const dic = [];

  const dfs = (current, length) => {
    if (maxLength < length) return;

    dic.push(current);

    for (let i = 0; i < words.length; i++) {
      dfs(current + words[i], length + 1);
    }
  };

  dfs('', 0);

  return dic.indexOf(word);
}