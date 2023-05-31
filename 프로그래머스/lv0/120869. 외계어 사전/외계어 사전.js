function solution(spell, dic) {
    const filtered = dic.filter((word) => word.length === spell.length);
    for (let word of filtered) {
      for (const char of spell) {
        if (!word.includes(char)) continue;
        word = word.replace(char, '');
      }
      if (word === '') return 1;
    }
    return 2;
}