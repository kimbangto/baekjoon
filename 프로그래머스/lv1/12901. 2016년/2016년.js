function solution(a, b) {
    let day = 0;

if (a === 1) {
  day = b;
} else {
  for (let i = 1; i < a; i++) {
    if (
      i === 1 ||
      i === 3 ||
      i === 5 ||
      i === 7 ||
      i === 8 ||
      i === 10 ||
      i === 12
    ) {
      day += 31;
    } else if (i === 4 || i === 6 || i === 9 || i === 11) {
      day += 30;
    } else if (i === 2) {
      day += 29;
    }
  }
  day += b;
}

switch (day % 7) {
  case 1:
    return 'FRI'
  case 2:
    return 'SAT'
  case 3:
    return 'SUN'
  case 4:
    return 'MON'
  case 5:
    return 'TUE'
  case 6:
    return 'WED'
  default:
    return 'THU'
}
}