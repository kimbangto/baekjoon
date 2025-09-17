fun main() {
    var num = 0;
    readln().split(" ").map { it.toInt() }.forEach {
        num += it * it
    }
    println(num % 10)
}