class Solution {
    fun solution(my_string: String): Int {
        var result = 0;
        for(char in my_string) {
            when(char) {
                in '1'..'9' -> result += char.toString().toInt()
            }
        }
        return result
    }
}