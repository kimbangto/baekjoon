function solution(order) {
    let money = 0;
    order.forEach(menu => {
        if(menu.includes('cafelatte')) money += 5000;
        else money += 4500;
    })
    return money;
}