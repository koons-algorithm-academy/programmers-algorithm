function solution(k, m, score) {
    let answer = 0;
    const boxCount = Math.floor(score.length / m);
    const reverseScore = score.sort((a,b) => b-a);
    
    for (let i = 0; i < boxCount; i++) {
        let box = [];
        
        box = reverseScore.slice(m * i, m * (i + 1));
        answer += Math.min(...box) * m;
    }
    
    return answer;
}