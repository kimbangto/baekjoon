class Solution {
    public int[] solution(int[] array) {
        int max = -1;
		int count = 0;
		for(int a : array) {
			if(max<a) {
				max = a;
			}
		}
		for(int a : array) {
			if(a == max) {
				break;
			}
			count++;
		}
		int[] answer = {max, count};
        return answer;
    }
}