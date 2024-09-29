class Solution {
    fun solution(hp: Int): Int {
        val jangGoon: Int = hp / 5
        val byeongJung: Int = (hp - jangGoon * 5) / 3
        val working: Int = (hp - jangGoon * 5 - byeongJung * 3)
        return jangGoon + byeongJung + working
    }
}