class Solution {
    fun solution(n: Int): Int {
        var sum = 0
        for(even in 2..n step 2) {
            // println(even)
            sum += even
        }
        return sum
    }
}