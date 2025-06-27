function solution(A,B){
    let answer = 0;
    const sortA = A.sort((a, b) => a - b);
    const reverseB = B.sort((a, b) => b - a);
    
    for (let i = 0; i < sortA.length; i++) {
        answer += sortA[i] * reverseB[i];
    }
    
    
    return answer;
}

/**
 * 문제 풀이
 * - 순차적으로 A의 최솟값과 B의 최댓값을 곱한 값을 누적하면 최솟값이 나온다고 가정하고 문제를 풀었음.
 * 1. A는 오름차순 정렬
 * 2. B는 내림차순 정렬
 * 3. A와 B의 각 요소를 곱하여 더함
 * 4. 더한 값을 반환
 */