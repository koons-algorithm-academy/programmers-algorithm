function solution(a, b, n) {
    let answer = 0;
    let emptyBottle = n;
    let remainBottle = 0;
    
    while (emptyBottle >= b) {
        const tempBottle = emptyBottle;
        emptyBottle = Math.floor((emptyBottle + remainBottle) / a) * b;
        remainBottle = tempBottle % a;
        
        console.log(tempBottle, emptyBottle, remainBottle)
        
        answer += emptyBottle;     
    }
    
    return answer;
}