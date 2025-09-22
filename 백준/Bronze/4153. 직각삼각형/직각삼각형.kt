fun main() {
    while(true) {
        val arr = readln().split(" ").map { it.toDouble() }.sorted()
        if(arr.reduce { total, num -> total + num } == 0.toDouble()) break;
        println(
            if(arr[0] * arr[0] + arr[1] * arr[1] == arr[2] * arr[2]) "right" else "wrong"
        )
    }
}