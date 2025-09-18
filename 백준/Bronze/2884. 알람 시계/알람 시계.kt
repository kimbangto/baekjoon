fun main() {
    var (hour, min) = readln().split(" ").map { it.toInt() }
    if(min - 45 < 0) {
        hour -= 1
        min = min + 60 - 45
    } else {
        min -= 45
    }
    if(hour < 0) hour += 24

    println("$hour $min")
}