import java.util.Arrays;

class Solution {
    public int solution(int[] numbers) {
        Arrays.sort(numbers);
		int max1; int max2;
		max1 = numbers[numbers.length-1] * numbers[numbers.length-2];
		max2 = numbers[0] * numbers[1];
		int answer;
		if(max1 > max2) {
			answer = max1;
		} else {
			answer = max2;
		}
        return answer;
    }
}