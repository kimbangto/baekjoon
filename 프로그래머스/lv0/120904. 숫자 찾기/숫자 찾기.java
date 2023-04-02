class Solution {
    public int solution(int num, int k) {
        int answer = -1;
		String stringNum = Integer.toString(num);
		for(int i=0; i<stringNum.length(); i++) {
			if(stringNum.charAt(i)-0 == k+48) {
				answer = i+1;
				break;
			}
		}
        return answer;
    }
}