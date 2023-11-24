function solution(dirs) {
    let x = 0;
    let y = 0;
    let answer = 0;
    
    const set = new Set();
    
    const addSet = (cur, acc) => {
        set.add(`${cur} ${acc}`);
        set.add(`${acc} ${cur}`);
    }
    
    const up = () => {
        if(y!==5) y++;
    }
    
    const down = () => {
        if(y!==-5) y--;
    }
    
    const left = () => {
        if(x!==-5) x--;
    }
    
    const right = () => {
        if(x!==5) x++;
    }
    
    for(const d of dirs) {
        const before = set.size;
        const cur = `${x}${y}`;
        if(d === 'U') up();
        if(d === 'D') down();
        if(d === 'L') left();
        if(d === 'R') right();
        const acc = `${x}${y}`;
        if(cur !== acc) addSet(cur, acc);
        const after = set.size;
        if(before !== after) answer++;
    }
    return answer;
}