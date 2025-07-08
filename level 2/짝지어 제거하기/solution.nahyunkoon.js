function failSolution(s)
{
    let str = s;
    let i = 0;
    
    while (str.length !== 0) {
        if (str [i+1] === undefined) {
            break;
        }
        
        if (str[i] === str[i+1]) {
            str = `${str.slice(0, i)}${str.slice(i+2)}`
            i = i - 1;
        } else {
            i++;
        }
    }

    return str.length > 0 ? 0 : 1;
}

/**
 * 문제 풀이
 * 1. 문자열을 순회
 *    - 같은 문자가 연속되는 경우 중복되는 문자를 제거. 제거하고 나서는 인덱스를 줄여서 다시 비교
 *    - 같은 문자로 연속되지 않는 다면 인덱스를 증가
 *    - 문자열에서 i + 1 값이 undefined 가 되면 문자열 순회 종료
 * 2. 문자열이 비어있으면 1, 아니면 0 반환
 * 
 * 정확성은 통과하지만 효율성에서는 테스트 2번 빼고 모두 통과하지 못함.
 */