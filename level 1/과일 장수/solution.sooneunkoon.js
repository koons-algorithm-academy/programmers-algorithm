function solution(k, m, scores) {
    var answer = 0;
    scores.sort((a, b) => b - a)
    let stack = []
    for (let i = 0; i < scores.length; i++) {
        const score = scores[i]
        stack.push(score)
        if (stack.length === m) {
            const minScore = Math.min(...stack)
            answer += minScore * m
            stack = []
        }
    }
    return answer;
}