class Solution {
    fun solution(price: Int): Int {
        val answer = when(price) {
            in 100000..299990 -> price * 0.95
            in 300000..499990 -> price * 0.9
            in 500000..1000000 -> price * 0.8
            else -> price
        }
        return answer.toInt()
    }
}