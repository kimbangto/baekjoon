fun main() {
    val x = readln().split(" ").map { it.toInt() }[1]
    println(readln().split(" ").map { it.toInt() }.filter { it < x }.joinToString(" "))
}