fun main() {
    while(true) {
        val input = readlnOrNull()?.split(' ')?.map { it.toInt() } ?: break
        println(input[0]+input[1])
    }
}