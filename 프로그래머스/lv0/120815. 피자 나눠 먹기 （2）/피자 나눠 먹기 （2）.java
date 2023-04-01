class Solution {
    public int solution(int n) {
        int a = 6; // 피자조각
        int lcm = 0;
		for(int i=1; i<=a*n; i++) {
			if(i % a == 0 && i % n ==0) {
				lcm = i;
				break;
			}
		}
		int answer = lcm / 6;
        return answer;
    }
}