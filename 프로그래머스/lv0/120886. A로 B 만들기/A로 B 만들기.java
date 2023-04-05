import java.util.Arrays;

class Solution {
    public int solution(String before, String after) {
        int answer = 1;
		char[] beforeArray = before.toCharArray();
		char[] afterArray = after.toCharArray();
		
		Arrays.sort(beforeArray);
		Arrays.sort(afterArray);
		
		for(int i=0; i<beforeArray.length; i++) {
			if(beforeArray[i] == afterArray[i]) {
				continue;
			} else {
				answer = 0;
			}
		}
        return answer;
    }
}