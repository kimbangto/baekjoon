function solution(n, lost, reserve) {
    const students = new Map();
    for (let i = 1; i <= n; i++) {
      students.set(i, 1);
    }
    lost.forEach((stu) => students.set(stu, students.get(stu) - 1));
    reserve.forEach((stu) => students.set(stu, students.get(stu) + 1));

    console.log(students);

    for (let i = 1; i <= n; i++) {
      if (students.get(i) === 0) {
        if (students.get(i - 1) === 2) {
          students.set(i - 1, 1);
          students.set(i, 1);
        } else if (students.get(i + 1) === 2) {
          students.set(i + 1, 1);
          students.set(i, 1);
        }
      }
    }
    return [...students.values()].filter((stu) => stu !== 0).length;
}