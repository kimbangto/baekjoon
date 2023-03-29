class Solution {
    public int solution(int n) {
        int count = 0;
        for(int a=1; a<=n; a++) {
            if(n % a == 0) {
            	count++;
            } else {
            	continue;
            }
        }
        int answer = count;
        return answer;
    }
}