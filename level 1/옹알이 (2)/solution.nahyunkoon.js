function solution(babbling) {
    let answer = 0;
    let words = ["aya", "ye", "woo", "ma"];
    
    for (let i = 0; i < babbling.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (babbling[i].indexOf(`${words[j]}${words[j]}`) > -1) {
                break;
            }
                        
            babbling[i] = babbling[i].replaceAll(words[j], "");
                                    
            if (babbling[i] === '') {
                answer++;
                break;
            }
        }
    }
    
    return answer;
}