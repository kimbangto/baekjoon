fun main() {
    readln()
    val input = readln().map { it.toString().toInt() }.reduce { total, num -> total + num }
    println(input)
}