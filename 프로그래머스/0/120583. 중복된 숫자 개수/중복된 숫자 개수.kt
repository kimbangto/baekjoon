class Solution {
    fun solution(array: IntArray, n: Int): Int {
        var answer: Int = 0
        for(num in array) {
            if(num == n) answer++
        }
        return answer
    }
}