class Solution {
    fun solution(n: Int): IntArray {
        val answerArr = ArrayList<Int>()
        for (num in 1..n step 2) {
            answerArr.add(num)
        }
        return answerArr.toIntArray()
    }
}