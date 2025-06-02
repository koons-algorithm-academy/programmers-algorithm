function solution(n, arr1, arr2) {
    let answer = [];
    
    for (let i = 0; i < n; i++) {
        const binaryItem1 = arr1[i].toString(2);
        const binaryItem2 = arr2[i].toString(2);
        const sum = Number(binaryItem1) + Number(binaryItem2);
        let sumStr = sum.toString();
        
        if(sumStr.length < n) {
            const blankStr = Array(n - sumStr.length).fill(' ').join('');
            sumStr = blankStr + sum;
        }
        
        const code = sumStr.split('').map((item) => Number(item) > 0 ? '#' : ' ').join('');
        answer.push(code);
    }
        
    return answer;
}

/**
 * 문제 풀이
 * 1. n만큼 각 배열의 요소를 순회하며 2진수로 변환
 * 2. 2진수로 변환된 각 배열 요소 값을 Number로 변환해서 더해줌 (ex. 111100 + 10101 = 21201)
 *   - '더해진 값'을 문자열로 변환한 후에 문자열 길이가 n보다 작으면, 빈 문자열을 '더해진 값' 앞에 추가해서 n만큼 길이를 맞춰줌
 * 3. 문자열로 변환된 '더해진 값'을 다시 배열로 변환해서 순회하며 0 초과면 #로, 그렇지 않으면 빈 문자열로 대치해줌
 * 4. 대치된 배열을 다시 문자열로 변환 후 answer 배열에 추가
 * 5. answer 배열을 반환
 */