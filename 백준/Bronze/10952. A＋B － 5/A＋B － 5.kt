fun main() {
    while(true) {
        val input = readln().split(" ").map { it.toInt() }
        if(input[0] == 0 && input[1] == 0) break
        println(input[0] + input[1])
    }
}