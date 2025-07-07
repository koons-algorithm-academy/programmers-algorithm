function solution(s) {
    let zeroCount = 0;
    let binaryCount = 0;
    let str = s;
    
    while(1 < str.length) {
        const zeroRegex = /0/g;
        const foundZero = str.match(zeroRegex);
        
        if (foundZero?.length) {
            zeroCount += foundZero?.length;    
            str = str.replaceAll("0", "");
        }

        const strLength = str.length;
        str = strLength.toString(2);
        binaryCount++;
    }
    
    return [binaryCount, zeroCount];
}

/**
 * 문제 풀이
 * 1. 문자열 길이가 1이 될 때까지 반복
 *    - 문자열에서 0이 있다면 문자열에서 0의 개수를 카운트하고, 문자열에서 0을 제거
 *    - 문자열 길이 값을 이진수로 변환
 *    - 이진수 변환 횟수를 카운트
 * 2. 반복문이 종료되면 이진수 변환 횟수와 0의 개수를 배열에 순차적으로 담아서 반환
 */