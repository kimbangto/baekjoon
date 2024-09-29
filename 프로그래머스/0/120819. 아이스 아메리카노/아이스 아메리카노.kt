class Solution {
    fun solution(money: Int): IntArray {
        val coffee: Int = money / 5500
        var resultArr = IntArray(2)
        resultArr[0] = coffee
        resultArr[1] = money-(5500*coffee)
        return resultArr
    }
}