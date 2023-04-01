class Solution {
    public String solution(int age) {
        String ageString = Integer.toString(age);
		char[] ageArray = ageString.toCharArray();
		StringBuilder sb = new StringBuilder();
		for(int i : ageArray) {
			sb.append((char)(i+49));
		}
		String answer = sb.toString();
        return answer;
    }
}