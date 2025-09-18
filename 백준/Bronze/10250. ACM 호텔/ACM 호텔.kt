fun main() {
    with(System.`in`.bufferedReader()) {
        val caseNum = readLine().toInt()

        for(case in 1..caseNum) {
            val input = readLine().split(" ")
            val floors = input[0].toInt()
            val guest = input[2].toInt()

            val floor = ((guest - 1) % floors + 1).toString()
            val room = ((guest - 1) / floors + 1).toString()

            println(floor + room.padStart(2, '0'))
        }
    }
}