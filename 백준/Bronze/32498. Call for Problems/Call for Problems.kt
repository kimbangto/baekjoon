fun main() {
    var count = 0
    for(i in 1..readln().toInt()) {
        if(readln().toInt() % 2 != 0) {
            count++
        }
    }
    println(count)
}