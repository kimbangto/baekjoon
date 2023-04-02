import java.util.Arrays;
class Solution {
    public String solution(String my_string) {
       StringBuilder sb = new StringBuilder();
		char[] charArray = my_string.toLowerCase().toCharArray();
		Arrays.sort(charArray);
		String answer = sb.append(charArray).toString();
        return answer;
    }
}