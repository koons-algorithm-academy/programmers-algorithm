function solution(foods) {
    const foodTableAsc = []
    for (let i = 1; i < foods.length; i++) {
        const foodCount = foods[i]
        const selectableFoodCount = Math.floor(foodCount / 2)
        foodTableAsc.push(String(i).repeat(selectableFoodCount))
    }
    return foodTableAsc.join('') + '0' + foodTableAsc.reverse().join('');
}