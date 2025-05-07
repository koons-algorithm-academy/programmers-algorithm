function solution(s, skip, index) {
    let answer = '';
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    for (const char of skip) {
        alphabet = alphabet.replace(char, '');
    }

    const alphabetLocation = [...alphabet].reduce((acc, val, idx) => {
        acc[val] = idx;
        
        return acc;
    }, {});
            
    for (let i = 0; i < s.length; i++) {
        let changeIdx = alphabetLocation[s[i]] + index;
        
        if (changeIdx > alphabet.length - 1) {
            changeIdx = changeIdx % alphabet.length;
        }

        answer += alphabet[changeIdx];
    }
    
    return answer;
}

/**
 * 풀이 과정
 * 1. 알파벳 문자열에서 skip에 포함된 문자열을 제거함.
 * 2. 객체에 알파벳 문자열의 인덱스를 저장함.
 * 3. s의 문자열을 순회하면서 객체에 저장된 인덱스를 찾아서 index만큼 더한 값을 반환함.
 * 4. 만약 인덱스가 알파벳 문자열의 길이를 초과하면 나머지 연산을 통해 인덱스 값을 구함
 * 5. 알파벳 문자열에서 인덱스에 해당하는 문자을 answer에 저장함.
 * 6. 반복문이 종료 후 answer를 반환함.
 */