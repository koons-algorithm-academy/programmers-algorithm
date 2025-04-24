function solution(k, score) {
    let answer = [];
    let todayScore = [];
    
    for (let i=0; i < score.length; i++) {
        const days = i < k ? i + 1 : k;
        todayScore.push(score[i]);
                
        const minScore = Math.min(...todayScore.sort((a,b) => b-a).slice(0,days));
        answer.push(minScore);
    }
    
    return answer;
}