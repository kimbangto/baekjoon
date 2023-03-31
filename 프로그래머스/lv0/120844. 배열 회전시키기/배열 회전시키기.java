class Solution {
    public int[] solution(int[] numbers, String direction) {
        int a;
		if(direction.equals("left")) {
			a = numbers[0];
			for(int i=1; i<numbers.length; i++) {
				numbers[i-1] = numbers[i];
			}
			numbers[numbers.length-1] = a;
		} else if(direction.equals("right")){
			a = numbers[numbers.length-1];
			for(int i=numbers.length-1; i>0; i--) {
				numbers[i] = numbers[i-1];
			}
			numbers[0] = a;
		}
        int[] answer = numbers;
        return answer;
    }
}