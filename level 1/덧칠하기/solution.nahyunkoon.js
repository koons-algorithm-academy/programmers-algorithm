function solution(n, m, section) {
    let answer = 0;
    let lastPaintedSection = 0;
    
    for (let i = 0; i < section.length; i++) {
        if (section[i] <= lastPaintedSection) {
            continue;
        }
        
        lastPaintedSection = section[i] + m - 1;
        answer++;
    }
    
    
    
    return answer;
}

/**
 * 문제풀이
 * 1. 마지막으로 덧칠한 위치를 lastPaintedSection 변수에 저장
 * 2. section 배열 길이 만큼 순회
 *    1) section[i]가 lastPaintedSection보다 작거나 같으면 넘어감
 *    2) section[i]가 lastPaintedSection보다 크다면, section[i] 부터 롤러로 다시 밀면서 덧칠한다고 생각하고 lastPaintedSection를 칠할 수 있는 최대 위치인 section[i] + m - 1로 업데이트 한 뒤 answer를 1 증가
 * 3. answer 반환
 */