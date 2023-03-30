class Solution {
    public String solution(String my_string) {
        String answer = "";
        StringBuilder sb = new StringBuilder();
		
		char[] charArray = my_string.toCharArray();
		
		for(char c : charArray) {
			if(65 <= (int)c && (int)c <= 90) {
				c = (char)(c+32);
			} else if(97 <= (int)c && (int)c <= 122) {
				c = (char)(c-32);
			}
			sb.append(c);
		}
		answer = sb.toString();
        return answer;
    }
}