function solution(num_list) {
    const last = num_list[num_list.length-1];
    const lastBefore = num_list[num_list.length-2];
    lastBefore < last ? num_list.push(last-lastBefore) : num_list.push(last * 2);
    return num_list;
}