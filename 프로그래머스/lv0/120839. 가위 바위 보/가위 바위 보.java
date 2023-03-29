class Solution {
    public String solution(String rsp) {
        String answer = "";
        		StringBuilder sb = new StringBuilder();
		
		char[] rspArray = rsp.toCharArray();
		
		for(char a : rspArray) {
			if(a == '2') {
				sb.append('0');
			} else if(a == '0') {
				sb.append('5');
			} else if(a == '5') {
				sb.append('2');
			}
		}
		answer = sb.toString();
        return answer;
    }
}