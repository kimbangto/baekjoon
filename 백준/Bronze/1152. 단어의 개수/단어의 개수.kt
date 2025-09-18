fun main() {
    fun isWord(word: String): Boolean {
        for(char in word) {
            if(!(char.isLetter())) {
                return false
            }
        }
        return true
    }
    println(readln().trim().split(" ").filter { it.isNotBlank() }.filter { isWord(it) }.size)
}