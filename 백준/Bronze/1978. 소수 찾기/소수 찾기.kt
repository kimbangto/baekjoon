fun main() {
    readln()
    var count = 0
    val targets = readln().split(" ").map { it.toInt() }.toMutableList()
    if(targets.contains(1)) targets.remove(1)
    if(targets.contains(2)) {
        targets.remove(2)
        count++
    }
    outer@for(target in targets) {
        for(i in 2..<target) {
            if(target % i == 0) continue@outer
        }
        count++
    }
    println(count)
}