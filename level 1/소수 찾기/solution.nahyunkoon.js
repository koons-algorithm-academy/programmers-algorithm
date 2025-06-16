function solution(n) {
    let primeNumbers = new Array(n + 1).fill(1);
    let answer = 0;
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        for (let j = i; i * j <= n; j++) {
            primeNumbers[i * j] = 0 
        }
    }    
    
    // 0과 1은 소수가 아니기 때문에 slice로 index 0과 1을 제거함.
    answer = primeNumbers.slice(2).filter((item) => item === 1).length; 
        
    return answer;
}

/**
 * 문제 풀이
 * 1. 에라토스테네스의 체를 사용하여 문제를 풂.
 * 2. 0을 포함한 n + 1 길이의 배열을 생성하여 모든 값을 1로 저장함.
 * 3. 주어진 n 의 약수를 구할 떄 가운데 약수 값을 기준으로 대칭적인 형태를 보임. 그래서 모든 수를 순회하지 않고 Math.sqrt(n) 까지만 순회하면 됨.
 *    - 순회할 때 0과 1은 소수가 아니기 때문에, 2부터 시작함.
 *    - 이중 반복문을 사용하여 소수가 아닌 값을 값에는 primeNumbers[i * j]에 0 으로 저장함. (j에 i값이 저장되어도 상관 없는 이유는 자기 자신은 소수가 아니기 때문에 어차피 해당이 안되고, 다음에 순회할 배수가 지금 순회중인 배수와 겹치지 않기 때문에 상관 없음)
 * 4. 소수가 아닌 값을 0으로 저장한 배열에서 0과 1을 제거하고, 1로 저장된 값 기준으로 소수의 개수를 구하고 값을 반환함.
 */