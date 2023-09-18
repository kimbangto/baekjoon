function solution(rank, attendance) {
    const student = [];
    rank.forEach((studentRank, studentNum) => {
        if(attendance[studentNum]) student.push([studentNum, studentRank]);
    })
    student.sort((a,b) => a[1] - b[1]);
    return ((10000 * student[0][0]) + (100 * student[1][0]) + student[2][0]);
}