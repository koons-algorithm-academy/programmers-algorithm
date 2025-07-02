function solution(s) {
    let answer = '';
    let words = s.split(' ');
    
    answer = words.map((word) => {
        if (typeof word[0] === 'string') {
            word = `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`;    
        }
        
        return word;
    }).join(" ");
    
    
    return answer;
}

/**
 * 문제 풀이
 * 1. 문자열을 공백을 기준으로 나누어 배열로 만든다.
 * 2. 배열의 각 요소를 순회하며 첫 문자를 대문자로 변환하고 나머지 문자를 소문자로 변환한다.
 * 3. 변환된 배열을 공백을 기준으로 합친다.
 * 4. 결과를 반환한다.
 */