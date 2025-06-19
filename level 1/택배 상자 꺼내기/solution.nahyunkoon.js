function successSolution(n, w, num) {
    let boxCount = 0;
    const currentNumLine = Math.ceil(num / w);
    let currentNumIndex = Math.ceil(num / w) % 2 === 0 ? currentNumLine * w - num : w - (currentNumLine * w - num);
    const totalLine = Math.ceil(n / w);
    
    if (totalLine % 2 === 0) {
        if (totalLine * w - n <= currentNumIndex && currentNumIndex <= w) {
            boxCount++;
        }
    } else {
        if (0 <= currentNumIndex && currentNumIndex <= Math.abs(totalLine * w - n - w)) {
            boxCount++;
        }
    }
        
    boxCount += totalLine - currentNumLine;

    return boxCount;
}

/** 문제 풀이
 * 1. 입력받은 숫자가 몇 번째 줄에 위치하는지 확인
 * 2. num이 line에서 몇 번째에 위치했는지 확인
 * 3. 마지막 줄에서 2에서 구한 값의 위치에 상자가 있는지 확인하고, 만약 존재한다면 상자 개수를 증가시킴
 *    - 마지막 줄이 짝수 라인이면 오른쪽에서 왼쪽으로 상자가 쌓이기 때문에 totalLine * w - n <= currentNumIndex && currentNumIndex <= w 조건을 만족해야 함.
 *    - 마지막 줄이 홀수 라인이면 왼쪽에서 오른쪽으로 상자가 쌓이기 때문에 0 <= currentNumIndex && currentNumIndex <= Math.abs(totalLine * w - n - w) 조건을 만족해야 함.
 * 4. 꺼내야하는 상자 총 개수(총 줄 수 - 현재 줄 수 + 마지막 줄에 있는 상자 수)를 반환함.
 */

function failSolution(n, w, num) {
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