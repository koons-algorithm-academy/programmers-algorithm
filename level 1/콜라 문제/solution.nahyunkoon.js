function solution(a, b, n) {
    let answer = 0;
    let emptyBottle = n;
    let remainBottle = 0;
    
    while (emptyBottle >= b) {
        const copyEmptyBottle = emptyBottle;        
        emptyBottle = Math.floor((emptyBottle + remainBottle) / a) * b;
        remainBottle = (copyEmptyBottle + remainBottle) % a;
        
        answer += emptyBottle;
    }
    
    return answer;
}

/**
 * 빈 병을 콜라로 바꾸는 과정에서 생기는 남은 빈병들을 계속 포함시켜서 계산하는 것이 핵심
 * 남은 콜라 빈 병(remainBottle)을 다음 계산 식에서 포함시켜서 계산되게 함.
 */