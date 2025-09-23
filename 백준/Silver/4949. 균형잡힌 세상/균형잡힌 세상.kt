fun main() {
    outer@while(true) {
        val input = readln()
        if(input == ".") break@outer

        val stack = mutableListOf<Char>()

        inner@for(char in input) {
            try {
                when(char) {
                    '(' -> stack.add('(')
                    '[' -> stack.add('[')
                    ')' -> {
                        if (stack.isEmpty()) {
                            println("no")
                            continue@outer
                        }
                        if (stack.last() == '(') stack.removeLast()
                        else {
                            println("no")
                            continue@outer
                        }
                    }
                    ']' -> {
                        if (stack.isEmpty()) {
                            println("no")
                            continue@outer
                        }
                        if (stack.last() == '[') stack.removeLast()
                        else {
                            println("no")
                            continue@outer
                        }
                    }
                }
            } catch (e: Exception) {
                println("no")
                continue@outer
            }
        }

        if(stack.isEmpty()) {
            println("yes")
        } else {
            println("no")
        }
    }
}