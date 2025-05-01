function solution(players, callings) {
    const playersObj = players.reduce((acc, val, index) => {
        acc[val] = index;
        
        return acc;
    }, {});    
    
    for (let i = 0; i < callings.length; i++) {
        const index = playersObj[callings[i]];
                
        playersObj[callings[i]] = index - 1;
        playersObj[players[index -1]] = index;
        
        if(index >= 1) {
            let temp = players[index - 1];
            players[index -1] = callings[i];
            players[index] = temp;
        }
    }
        
    return players;
}