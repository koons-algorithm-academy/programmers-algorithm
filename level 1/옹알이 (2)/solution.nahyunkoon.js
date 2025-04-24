function solution(babbling) {
    let answer = 0;
    let words = ["aya", "ye", "woo", "ma"];
    
    for (let i = 0; i < babbling.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (babbling[i].indexOf(`${words[j]}${words[j]}`) > -1) {
                break;
            }
                        
            babbling[i] = babbling[i].replaceAll(words[j], "_");
                        
            const deduplicationUnderbar = [...new Set(babbling[i])];
               
            if (deduplicationUnderbar.length === 1 && deduplicationUnderbar[0] === '_') {
                answer++;
                break;
            }
        }
    }
    
    return answer;
}