function solution(keyinput, board) {
    let answer = [0, 0];
const maxRight = Math.floor(board[0] / 2);
const maxUp = Math.floor(board[1] / 2);
const maxLeft = maxRight * -1;
const maxDown = maxUp * -1;

console.log(`상:${maxUp} 하:${maxDown} 좌:${maxLeft} 우:${maxRight}`);

keyinput.forEach((item) => {
    if(item == 'left') {
        if(answer[0] != maxLeft) {
            answer[0]--;
        }
    }
    if(item == 'right') {
        if(answer[0] != maxRight) {
            answer[0]++;
        }
    }
    if(item == 'down') {
        if(answer[1] != maxDown) {
            answer[1]--;
        }
    }
    if(item == 'up') {
        if(answer[1] != maxUp) {
            answer[1]++;
        }
    }
});
    return answer;
}