function solution(arr)
{
    const stack = [];
    
    for(const value of arr) {
        if(stack[stack.length-1] !== value) stack.push(value);
    }
    
    return stack;
}