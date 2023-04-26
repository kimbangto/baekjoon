import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

class Solution {
    public int[] solution(int[] arr, int[][] queries) {
        		int[] answer = new int[queries.length]; // 쿼리 배열 길이만큼의 answer 배열 생성
		for(int i=0; i<answer.length; i++) {
			answer[i] = -1;
		}
//		answer.fill(-1); // answer 배열의 모든 값을 -1로 초기화

		//

		for (int n = 0; n < queries.length; n++) { // n번 쿼리 배열을 하나씩 보면서
			ArrayList<Integer> iarray = new ArrayList<>();
//		  let iarray = []; // i값을 담을 수 있는 배열 생성
		  for (int i = queries[n][0]; i <= queries[n][1]; i++) { // iarray에 쿼리 배열 s(0번인덱스)부터 쿼리 배열 e(1번인덱스)까지를 담는 반복문
		    iarray.add(arr[i]);
		  }
		  Collections.sort(iarray); //  iarray를 오름차순으로 정렬
		  for (int j = 0; j < iarray.size(); j++) { // iarray를 순서대로 하나씩 돌면서
		    if (iarray.get(j) > queries[n][2]) { // 쿼리 배열의 k(2번인덱스)보다 큰 값을 찾아서 존재한다면
		      answer[n] = iarray.get(j); // answer의 n번째 인덱스에 넣음
		      break; // k보다 크면서 가장 작은 값을 찾았으므로 종료
		    }
		  }
		}
        return answer;
    }
}