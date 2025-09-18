fun main() {
    val input = readln().toInt()
    for(i in 1..input) {
        println("*".repeat(i).padStart(input, ' '))
    }
}