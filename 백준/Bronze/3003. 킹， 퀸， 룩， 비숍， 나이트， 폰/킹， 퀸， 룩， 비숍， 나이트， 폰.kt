fun main() {
    val pieces = readln().split(" ").map { it.toInt() }.toMutableList()
    pieces[0] = 1 - pieces[0]
    pieces[1] = 1 - pieces[1]
    pieces[2] = 2 - pieces[2]
    pieces[3] = 2 - pieces[3]
    pieces[4] = 2 - pieces[4]
    pieces[5] = 8 - pieces[5]
    println(pieces.joinToString(" "))
}