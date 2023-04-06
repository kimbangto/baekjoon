class Solution {
    public int solution(int i, int j, int k) {
        int answer = 0;
        StringBuilder sb = new StringBuilder();
		for(int a=i; a<=j; a++) {
			sb.append(Integer.toString(a));
		}
		String s = sb.toString();
		for(int a=0; a<s.length(); a++) {
			if(s.charAt(a) == ((char)(k+'0'))) {
				answer++;
			}
		}
        return answer;
    }
}