fun main() {
    val input = mutableListOf<Int>()

    for(i in 1..10) {
        input.add(readln().toInt() % 42)
    }

    println(input.distinct().size)
}