function solution(s, skip, index) {
    let answer = '';
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';

    for (const char of s) {
      let charIndex = alphabets.indexOf(char);
      let count = 0;
      while (count < index) {
        charIndex++;
        if (alphabets.length <= charIndex) charIndex -= alphabets.length;
        if (!skip.includes(alphabets[charIndex])) count++;
      }
      answer += alphabets[charIndex];
    }
    return answer;
}