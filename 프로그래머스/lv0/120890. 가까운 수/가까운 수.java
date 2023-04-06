class Solution {
    public int solution(int[] array, int n) {
        int answer = 0;
        int a = 100; // 두 수의 차
		
		for(int i : array) {
			if(Math.abs(i - n) < a) {
				a = Math.abs(i - n);
				answer = i;
			} else if(Math.abs(i - n) == a) {
				if(i < answer) {
					answer = i;
				}
			}
		}
        return answer;
    }
}