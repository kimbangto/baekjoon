function solution(name, yearning, photo) {
    var answer = [];
    photo.forEach((names) => {
  let count = 0;
  names.forEach((man) => {
    let found = name.findIndex((name) => name === man);
    if (found !== -1) count += yearning[found];
  });
  answer.push(count);
});
    return answer;
}