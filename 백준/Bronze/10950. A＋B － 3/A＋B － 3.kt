fun main() {
    for(i in 1..readln().toInt()) {
        val input = readln().split(" ").map { it.toInt() }
        println(input[0] + input[1])
    }
}