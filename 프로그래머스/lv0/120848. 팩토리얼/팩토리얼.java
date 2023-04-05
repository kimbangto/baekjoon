class Solution {
    public int solution(int n) {
        int answer = 0;
		int count = 1;
		
		for(int i=1; count<=n; i++) {
			count *= i;
			answer = i;
		}
        return answer-1;
    }
}