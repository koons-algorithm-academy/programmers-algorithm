function solution(board, moves) {
    let answer = 0;
    let basket = [];
    let location = board.reduce((acc, val, idx) => {
        acc[idx + 1] = [];
        return acc;
    }, {});
    
    for (let i = board.length - 1; i > -1 ; i--){
        for (let j = board[i].length - 1; j > -1; j--) {
            const doll = board[i][j];
            
            if (doll === 0) continue;
            
            location[j + 1].push(doll);
        }
    }
    
    for (let i = 0; i < moves.length; i++) {
         const lastDoll = location[moves[i]].pop();
        
        if (lastDoll) {
            if (lastDoll === basket[basket.length - 1]) {
                basket.pop();
                answer += 2;
            } else {
                basket.push(lastDoll);
            }
        }
    }
        
    return answer;
}

/**
 * 문제 풀이
 * 1. 각 열에 인형이 있는지 확인하기 위해 객체에 열 번호를 키로 하여 인형 배열을 저장
 * 2. 크레인 이동 횟수만큼 반복하며 인형을 뽑아 바구니에 저장
 * 3. 바구니의 마지막 인형과 크레인으로 뽑은 인형이 같으면, 바구니에서 인형을 제거하고 사라진 인형 개수에 2를 더해서 저장
 *  - 인형은 항상 2개만 사라지기 때문에 2를 더해주면 됨.
 * 4. 바구니의 마지막 인형과 크레인으로 뽑은 인형이 다르거나 바구니에 인형이 없으면, 바구니에 인형을 추가
 * 5. 사라진 인형의 개수를 반환
 */