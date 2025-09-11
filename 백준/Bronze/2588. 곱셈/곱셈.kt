fun main() {
    val one = readln().toInt()
    val two = readln()

    println(one * two[2].digitToInt())
    println(one * two[1].digitToInt())
    println(one * two[0].digitToInt())
    println(one * two.toInt())
}