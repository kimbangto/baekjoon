class Solution {
    public int solution(int[] array, int n) {
        int[] arrayy = new int[1001];
		for(int i=0; i<array.length; i++) {
			arrayy[array[i]]++;
		}
		int answer = arrayy[n];
        return answer;
    }
}