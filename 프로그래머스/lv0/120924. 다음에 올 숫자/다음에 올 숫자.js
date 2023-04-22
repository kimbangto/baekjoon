function solution(common) {
    function isAS(array) { // 등차수열
    for(let i=1; i<array.length-1; i++) {
        if(array[i] - array[i-1] === array[i+1] - array[i]) {
            if(i === array.length-2) {
                return true;
            } else {
                continue;
            }
        } else {
            return false;
        }
    }
}

function isGS(array) { // 등비수열
    for(let i=1; i<array.length-1; i++) {
        if(array[i] / array[i-1] === array[i+1] / array[i]) {
            if(i === array.length-2) {
                return true;
            } else {
                continue;
            }
        } else {
            return false;
        }
    }
}

let answer = 0;

if(isAS(common) === true) {
    answer = common[common.length-1] + common[common.length-1] - common[common.length-2];
} else {
    answer = common[common.length-1] * (common[common.length-1] / common[common.length-2]);
}
    return answer;
}