class Solution {
    public int solution(int[] box, int n) {
        int a = (box[0]/n) * (box[1]/n);
		int b = box[2] / n;
		
		int answer =  a * b;
        return answer;
    }
}