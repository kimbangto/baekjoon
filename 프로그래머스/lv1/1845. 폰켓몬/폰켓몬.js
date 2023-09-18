function solution(nums) {
    const ponketmon = new Set(nums);
    const n = nums.length / 2;

    const answer = (ponketmon.size < n ? ponketmon.size : n);
    return answer;
}