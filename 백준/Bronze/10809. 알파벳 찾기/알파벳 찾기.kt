fun main() {
    val map = MutableList(26) { -1 }

    readln().forEachIndexed { idx, char ->
        if(map[char.code - 97] == -1)
        map[char.code - 97] = idx
    }

    println(map.joinToString(" "))
}