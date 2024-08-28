function solution(skill, skill_trees) {
  let answer = 0;

  for (let i = 0; i < skill_trees.length; i++) {
    const target = Array.from(skill_trees[i])
      .filter((x) => skill.includes(x))
      .join('');

    if (skill.slice(0, target.length) === target || target.length === 0) {
      answer++;
    } else continue;
  }

  return answer;
}