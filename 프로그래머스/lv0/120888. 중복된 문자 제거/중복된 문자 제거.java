import java.util.ArrayList;
import java.util.Arrays;

class Solution {
    public String solution(String my_string) {
        char[] my_string_char = my_string.toCharArray();
		ArrayList<Character> arrayList = new ArrayList<>();
		for(char c : my_string_char) {
			if(!arrayList.contains(c)) {
				arrayList.add(c);
			}
		}
		StringBuilder sb = new StringBuilder();
		for(char c : arrayList) {
			sb.append(c);
		}
		String answer = sb.toString();
        return answer;
    }
}