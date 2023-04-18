function solution(array, n) {
    let arrayy = new Array(1001);
    arrayy.fill(0);
		for(let i=0; i<array.length; i++) {
			arrayy[array[i]]++;
		}
		let answer = arrayy[n];
        return answer;
}