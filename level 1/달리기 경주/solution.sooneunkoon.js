function solution(players, callings) {
    const nameMap = {}
    for (let i = 0; i < players.length; i++) {
        const player = players[i]
        nameMap[player] = i
    }
    for (let i = 0; i < callings.length; i++) {
        const player = callings[i]
        const curRank = nameMap[player] - 1
        const tracePlayer = players[curRank]
        nameMap[player] = curRank
        nameMap[tracePlayer] = curRank + 1
        players[curRank] = player
        players[curRank + 1] = tracePlayer
    }
    return players;
}