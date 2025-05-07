function solution(n, w, num) {
    let answer = 0;
    const totalLine = Math.ceil(n/w);
    let remainBox = n % w;
        
    const lastLineBox = {...new Array(w).fill('').map((_, index) => {
        if (w === 1 || remainBox === 0) {
            return 1;
        }
        
        if (totalLine % 2 === 0) {
            if (w - remainBox <= index && index <= w) {
                return 1;
            }
        } else {
            if (0 <= index && index <= remainBox - 1) {
                return 1;
            }
        }
        
        return 0;
    })}
    
        
    const numY = Math.ceil(num/w);
    const numX = w === 1 || remainBox === 0 || numY % 2 === 0 ?  ((numY * w) - num) : Math.abs(((numY * w) - num) - 1);
                
    answer = (lastLineBox[numX] ?? 0) + totalLine - numY;
    
    return answer;
}

/**
 * 테스트 12, 13, 20, 21, 24 통과 못함
 * 
 * [ 처음 시도한 방법 ]
 * 1. 제일 상단에 쌓은 층에 상자가 쌓이는 위치에 대한 값을 저장함.
 * 2. 상자가 쌓인 위치에서 num의 위치를 찾음.
 *    이 때 층이 짝수인 경우와 홀수인 경우로 나누어서 상자가 쌓이는 위치를 찾음.
 * 3. num이 위치한 x좌표의 제일 상단 상자 값 + y축 기준 전체 상자 라인 수 - num이 위치한 y좌표 값을 반환함.
 *  */ 