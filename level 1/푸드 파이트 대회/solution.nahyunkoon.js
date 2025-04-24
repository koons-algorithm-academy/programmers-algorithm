function solution(food) {
    let answer = '';
    let myFoodStr = '';
    let anotherFoodStr = '';
    
    for (let i=1; i<food.length; i++) {
        const repeatCount = Math.floor(food[i]/2);
        myFoodStr += `${i}`.repeat(repeatCount);
    }
    
    anotherFoodStr = [...myFoodStr].reverse().join('');
    answer = myFoodStr + "0" + anotherFoodStr;
    
    return answer;
}