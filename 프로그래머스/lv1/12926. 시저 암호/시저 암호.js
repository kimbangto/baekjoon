function solution(s, n) {
    var answer = '';
    for (let i = 0; i < s.length; i++) {
  if (s[i] === ' ') {
    answer += ' ';
  } else if ('A' <= s[i] && s[i] <= 'Z') {
    if (90 < s.charCodeAt(i) + n) {
      answer += String.fromCharCode(s.charCodeAt(i) + n - 26);
    } else answer += String.fromCharCode(s.charCodeAt(i) + n);
  } else if ('a' <= s[i] && s[i] <= 'z') {
    if (122 < s.charCodeAt(i) + n) {
      answer += String.fromCharCode(s.charCodeAt(i) + n - 26);
    } else answer += String.fromCharCode(s.charCodeAt(i) + n);
  }
}
    return answer;
}