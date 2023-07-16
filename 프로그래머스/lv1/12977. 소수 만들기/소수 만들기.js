function solution(nums) {
    let answer = 0;
    
    const isPrime = (number) => {
      for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
      }
      return true;
    };
    
    for(let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            for(let k=j+1; k<nums.length; k++) {
                if(isPrime(nums[i] + nums[j] + nums[k])) answer++;
            }
        }
    }
    
    return answer;
}