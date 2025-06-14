function solution(d, budget) {
    let answer = 0;
    const sortD = d.sort((a, b) => a - b);
    
    for (let i = 1; i <= sortD.length; i++) {
        const sum = sortD.slice(0, i).reduce((acc, val) => acc + val, 0);

        if (budget < sum) {
            break;
        }
                
        answer++;
    }
    
    return answer;
}

/**
 * 문제풀이
 * 1. d 배열을 오름차순으로 정렬
 * 2. d 배열 길이 만큼 순회
 *    1) d 배열의 0번째 인덱스부터 i번째 인덱스까지의 합을 sum 변수에 저장
 *    2) sum이 budget보다 크다면 반복문 종료
 *    3) 아니면 answer를 1 증가 (이 코드는 지원 가능한 부서 개수를 증가 시키는 것을 의미함)
 * 3. answer 반환
 */