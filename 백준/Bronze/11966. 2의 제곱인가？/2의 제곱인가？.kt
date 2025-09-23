fun main() {
    var n = readln().toInt()
    while (n > 1) {
        if (n % 2 != 0) {
            println(0)
            return
        }
        n /= 2
    }
    println(1)
}