fun main() {
    val list = mutableListOf<String>()
    for(i in 1..readln().toInt()) {
        list.add("LoveisKoreaUniversity")
    }
    println(list.joinToString(" "))
}