function solution(a, b, n, answer = 0) {
    if (n < a) return answer
    const receiveCola = Math.floor(n / a) * b
    answer += receiveCola
    n = (n % a) + receiveCola
    return solution(a, b, n, answer);
}

/**
 * 재귀를 쓰기시작하면 모든 의식의 흐름이 재귀로 흐르는...
 */