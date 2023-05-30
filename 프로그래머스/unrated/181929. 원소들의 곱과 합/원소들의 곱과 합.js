function solution(num_list) {
    let plus = 0;
    let multi = 1;
    num_list.forEach(num => {
        plus += num;
        multi *= num;
    })
    return (multi<plus*plus?1:0);
}