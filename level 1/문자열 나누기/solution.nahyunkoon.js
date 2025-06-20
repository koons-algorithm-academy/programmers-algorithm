function solution(s) {
    let answer = 0;
    let sameCharCount = 0;
    let diffCharCount = 0;
    let startChar = s[0];
    
    for (let i = 0; i < s.length; i++) {
        if (startChar === s[i]) {
            sameCharCount++;
        } else {
            diffCharCount++;
        }
                
        if (sameCharCount === diffCharCount) {
            answer++;
            sameCharCount = 0;
            diffCharCount = 0;

            if (i < s.length - 1) {
                startChar = s[i+1];
            }

        }
        
        if (sameCharCount !== diffCharCount && i === s.length - 1) {
            answer++;
        }
    }
    
    return answer;
}

/**
 * 문제풀이
 * 1. s 문자열 순회
 *    - 기준이 되는 문자와 같은지 다른지 비교
 *    - 같으면 sameCharCount 증가, 다르면 diffCharCount 증가
 *    - sameCharCount와 diffCharCount가 같아지면 문자열 나누는 행위라고 생각하고 answer에 +1 하고, sameCharCount와 diffCharCount 초기화
 *      - 문자열 나누는 행위를 한 이후에는 기준이 되는 문자를 다음 문자로 변경
 *    - 만약 sameCharCount와 diffCharCount가 같지 않고 더 읽을 문자열이 없다면 answer에 +1 하고 종료
 * 2. answer 반환
 */