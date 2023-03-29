class Solution {
    public String solution(String my_string) {
        		char[] cArray = my_string.toCharArray();
		
		StringBuilder sb = new StringBuilder();
		
		for(char c : cArray) {
			if(c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
				continue;
			} else {
				sb.append(c);
			}
		}
		String answer = sb.toString();
        return answer;
    }
}