const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function reverse(char) {
    return ('a' <= char && char <= 'z' ? char.toUpperCase() : char.toLowerCase());
}

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    answer = '';
    for(const char of str) {
        answer += reverse(char);
    }
    console.log(answer);
});