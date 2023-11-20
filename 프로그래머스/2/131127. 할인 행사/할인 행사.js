function solution(want, number, discount) {
    const hasWant = (arr, product, num) => {
        if(num <= arr.filter(x => x === product).length) return true;
        return false;
    }
    
    let count = 0;
    
    sale : for(let i=10; i<=discount.length; i++) {
        const arr = discount.slice(i-10, i);
        for(let i=0; i<want.length; i++) {
            if(hasWant(arr, want[i], number[i]) === false) continue sale;
        }
        count++;
    }
    return count;
}