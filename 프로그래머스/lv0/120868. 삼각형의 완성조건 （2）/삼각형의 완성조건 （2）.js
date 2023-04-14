function solution(sides) {
    let set = new Set();
let max;
let another;
if(sides[0] > sides[1]) {
    max = sides[0];
    another = sides[1];
} else {
    max = sides[1];
    another = sides[0];
}

// max - another < x <= max
for(let i=max-another+1; i<max+another; i++) {
    set.add(i);
}
    return set.size;
}