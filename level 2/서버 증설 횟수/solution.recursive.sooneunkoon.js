function solution(players, m, k) {
    var answer = 0;
    const serverInfo = [];
    players.forEach((playerCount, time) => {
        const overPlayersCount = playerCount - (m - 1) - (serverInfo.length * m)
        if (overPlayersCount > 0) {
            const caCount = Math.ceil(overPlayersCount / m)
            answer += caCount
            const servers = new Array(caCount).fill(time + k - 1)
            serverInfo.push(...servers)
        }
        shutdown(serverInfo, time, k)
    })

    return answer;
}

const shutdown = (serverInfo, time) => {
    const firstServer = serverInfo[0]
    if (firstServer === time) {
        serverInfo.shift()
        return shutdown(serverInfo, time)
    }
    return
}