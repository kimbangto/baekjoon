fun main() {
    val result = readln().toInt() * readln().toInt() * readln().toInt()

    for (i in 0..9) {
        println(result.toString().count { it == i.toString().single() })
    }
}