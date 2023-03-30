class Solution {
    public String solution(String my_string, int num1, int num2) {
        char c1 = my_string.charAt(num1); // o
        char c2 = my_string.charAt(num2); // 공백
        
        StringBuilder sb = new StringBuilder();
        
        sb.append(my_string);
        sb.setCharAt(num1, c2);
        sb.setCharAt(num2, c1);
        
        String answer = sb.toString();
        return answer;
    }
}