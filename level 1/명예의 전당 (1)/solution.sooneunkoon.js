function solution(k, scores) {
    var answer = [];
    const rank = []
    for (let i = 0; i < scores.length; i++) {
        const score = scores[i]
        if (i < k) {
            rank.push(score)
        } else {
            if (rank[k - 1] < score) {
                rank.pop()
                rank.push(score)
            }
        }
        rank.sort((a, b) => b - a)
        answer.push(Math.min(...rank))
    }
    return answer;
}