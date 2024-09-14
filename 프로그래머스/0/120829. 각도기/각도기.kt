class Solution {
    fun solution(angle: Int): Int {
        val answer = when(angle) {
            in 1..89 -> 1
            90 -> 2
            in 91..179 -> 3
            180 -> 4
            else -> -1
        }
        return answer
    }
}