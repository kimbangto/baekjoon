function solution(num_list) {
    let count = 0;
    num_list.forEach(num => {
        let target = num;
        while(target !== 1) {
            if(target % 2 === 0) target /= 2;
            else target = (target-1) / 2;
            count++;
            }
        })
    return count;
}