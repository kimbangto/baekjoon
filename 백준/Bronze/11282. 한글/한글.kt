fun main() {
    val n = readln().toInt() - 1 // N번째 → 0부터 시작하도록 -1
    val cho = n / (21 * 28)
    val jung = (n % (21 * 28)) / 28
    val jong = n % 28

    val codePoint = 0xAC00 + (cho * 21 * 28) + (jung * 28) + jong
    val result = codePoint.toChar()
    println(result)
}