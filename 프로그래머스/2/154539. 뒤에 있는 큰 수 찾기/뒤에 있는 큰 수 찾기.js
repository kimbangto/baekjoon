function solution(numbers) {
    const numLength = numbers.length;
    const result = Array(numLength).fill(-1);
    const stack = [];
    for(let i=numLength-1; 0<=i; i--) {
        while(stack.length !== 0 && stack.at(-1) <= numbers[i]) stack.pop();
        if(stack.length !== 0)  result[i] = stack.at(-1);
        stack.push(numbers[i]);
    }
    return result;
}