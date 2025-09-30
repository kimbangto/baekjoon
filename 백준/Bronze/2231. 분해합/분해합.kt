fun main() {
    val n = readln().toInt()
    for(i in 1..n) {
        val sum = i.toString().split("").filter { it.isNotBlank() }.map { it.toInt() }.fold(0) { acc, i -> acc + i } + i
        if(sum == n) {
            println(i)
            break
        }
        if(i == n) {
            println(0)
        }
    }
}