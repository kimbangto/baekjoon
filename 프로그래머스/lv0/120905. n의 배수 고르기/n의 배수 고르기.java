class Solution {
    public int[] solution(int n, int[] numlist) {
        		int count = 0;
		for(int a : numlist) {
			if(a%n == 0) {
				count++;
			}
		}
		int[] answer = new int[count];
		count = 0;
		for(int a : numlist) {
			if(a%n == 0) {
				answer[count] = a;
				count++;
			}
		}
        return answer;
    }
}