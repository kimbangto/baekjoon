class Solution {
    public String[] solution(int n, int[] arr1, int[] arr2) {
        //Stringformat 정해주기 - 2진수 변환 앞자리 0으로 채워주는 포맷
		StringBuilder sb = new StringBuilder();
		sb.append("%0");
		sb.append(n);
		sb.append("d");
		String format = sb.toString();
		
		//2진수로 변환해서 배열에 담기(string format 이용해서 자릿수 맞춰줌)
		String[] sarr1 = new String[n];
		String[] sarr2 = new String[n];
		
		for(int i=0; i<n; i++) {
			sarr1[i] = String.format(format, Long.parseLong(Integer.toBinaryString(arr1[i])));
		}
		for(int i=0; i<n; i++) {
			sarr2[i] = String.format(format, Long.parseLong(Integer.toBinaryString(arr2[i])));
		}
		
		//두 지도를 합친 새로운 배열 만들기
		String[] answer = new String[n];
		//0 = 공백, 1 = 벽 -> 모두 공백만 공백, 하나라도 벽이면 벽
		for(int j=0; j<n; j++) { // answer 전체에 해당하는 for문
			StringBuilder newsb = new StringBuilder();
			for(int k=0; k<n; k++) { // answer[i]를 하나하나 비교할 for문
				if(sarr1[j].charAt(k) == '0' && sarr2[j].charAt(k) == '0') {
					newsb.append(0);
				} else {
					newsb.append(1);
				}
			}
			answer[j] = newsb.toString();
		}
		
		//1 =>'#', 0 => 공백으로 문자열 변환
		for(int j=0; j<n; j++) { // answer 전체에 해당하는 for문
			StringBuilder newsb = new StringBuilder();
			for(int k=0; k<n; k++) { // answer[i]를 하나하나 비교할 for문
				if(answer[j].charAt(k) == '1') {
					newsb.append('#');
				} else {
					newsb.append(' ');
				}
			}
			answer[j] = newsb.toString();
		}
        return answer;
    }
}