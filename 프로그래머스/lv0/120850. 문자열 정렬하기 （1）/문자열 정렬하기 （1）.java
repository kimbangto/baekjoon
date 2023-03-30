import java.util.Arrays;

class Solution {
    public int[] solution(String my_string) {
        int count = 0;
		
		char[] charArray = my_string.toCharArray();
		for(char c : charArray) {
			if(48<= (int)c && (int)c <= 57) {
				count++;
			}
		}
		int[] answer = new int[count];
		int start = 0;
		for(char c : charArray) {
			if(48<= (int)c && (int)c <= 57) {
				answer[start] = c-48;
				System.out.println(answer[start]);
				start++;
			}
		}
		Arrays.sort(answer);
        return answer;
    }
}