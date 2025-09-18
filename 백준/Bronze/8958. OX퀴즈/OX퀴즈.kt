fun main() {
    for(i in 1..readln().toInt()) {
        var result = 0
        var count = 0
        readln().forEach {
            if(it == 'O') count++
            else count = 0
            result += count
        }
        println(result)
    }
}