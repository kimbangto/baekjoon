fun main() {
    var max = 0
    var idx = 0
    for(i in 1..9) {
        val input = readln().toInt()
        if(max < input) {
            max = input
            idx = i
        }
    }
    println(max)
    println(idx)
}