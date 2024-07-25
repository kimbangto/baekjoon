function solution(bandage, health, attacks) {
    let currHealth = health;
    
    for(let i=0; i<=attacks.length-1; i++) {
        console.log('공격시간', attacks[i][0]);
        const safeTime = (i === 0 ? attacks[i][0] - 1 : attacks[i][0] - attacks[i-1][0] - 1);
        console.log('연속성공', safeTime);
        
        const getBonus = (safeTime) => {
            if(bandage[0] <= safeTime) {
            return Math.floor(safeTime/bandage[0]) * bandage[2];
            } else return 0;
        }
        
        const bonus = getBonus(safeTime);
        console.log('추가회복량', bonus);
        
        // 회복량 계산
        const heal = (safeTime * bandage[1]) + bonus;
        console.log('회복량', heal);
        currHealth += heal;
        if(currHealth > health) currHealth = health;
        console.log('현재 체력', currHealth);
        
        // 피해량 계산
        const damage = attacks[i][1];
        console.log('피해량', damage);
        currHealth -= damage;
        console.log('남은 체력', currHealth);
        if(currHealth <= 0) return -1;
        console.log('-----');
    }
    
    return currHealth;
}