function solution(date1, date2) {
    var answer = 0;
    let date1tostring =
  date1[0].toString().padStart(4, 0) +
  date1[1].toString().padStart(2, 0) +
  date1[2].toString().padStart(2, 0);

let date2tostring =
  date2[0].toString().padStart(4, 0) +
  date2[1].toString().padStart(2, 0) +
  date2[2].toString().padStart(2, 0);

if (date1tostring < date2tostring) {
    return 1;
} else {
  return 0;
}

    return answer;
}