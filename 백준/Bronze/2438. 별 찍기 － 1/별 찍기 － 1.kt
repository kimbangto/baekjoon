fun main() {
    with(System.`in`.bufferedReader()) {
        val n = readln().toInt()
        for (i in 1..n) {
            val star = "*".repeat(i)
            println(star)
        }
    }
}