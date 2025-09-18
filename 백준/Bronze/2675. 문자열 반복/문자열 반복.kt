fun main() {
    for(i in 1..readln().toInt()) {
        val (repeat, string) = readln().split(" ")
        println(string.map { it.toString().repeat(repeat.toInt()) }.joinToString(""))
    }
}