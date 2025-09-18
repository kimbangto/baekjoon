fun main() {
    readln()
    val arr = readln().split(" ").map { it -> it.toLong() }
    println("${arr.min()} ${arr.max()}")
}