function solution(land) {
    var answer = 0;
    const xLength = land[0].length
    const yLength = land.length
    const extractMap = {}
    let keyIdx = 1
    for (let x = 0; x < xLength; x++) {
        let extractCount = 0
        const extractHistory = {}
        for (let y = 0; y < yLength; y++) {
            const cur = land[y][x]
            if (extractableCheck(cur)) {
                // const key = Object.keys(extractMap).length + 1 + ''
                const key = keyIdx + ''
                keyIdx++
                extractHistory[key] = true
                extractCount += extraction(land, [y, x], extractMap, key)
            } else if (cur !== 0 && typeof cur === 'string' && !extractHistory[cur]) {
                extractHistory[cur] = true
                extractCount += extractMap[cur]
            }
        }

        answer = Math.max(answer, extractCount)
    }

    return answer;
}

const extractableCheck = (cur) => {
    if (cur === 1) {
        return true
    }
    return false
}

const extraction = (land, start, extractMap, key) => {
    let result = 0;
    const maxX = land[0].length - 1
    const maxY = land.length - 1
    const moveX = [1, -1, 0, 0]
    const moveY = [0, 0, 1, -1]
    const queue = [start]
    while (queue.length) {
        const [y, x] = queue.shift()
        if (!extractableCheck(land[y][x])) {
            continue
        }
        result++
        land[y][x] = key
        for (let i = 0; i < moveX.length; i++) {
            const nextX = x + moveX[i]
            const nextY = y + moveY[i]
            if (nextX >= 0 && nextY >= 0 && nextX <= maxX && nextY <= maxY && extractableCheck(land[nextY][nextX])) {
                queue.push([nextY, nextX])
            }
        }
    }
    extractMap[key] = result
    return result
}

/**
 * 정확성 100%
 * 효율성 테스트 통과하지 못함
 * 
 * 이전코드는 땅을 탐색하며 석유를 몇덩이를 최대로 가져올 수 있는지 그떄그떄 bfs알고리즘으로 확인함
 * 하지만 같은 석유그룹에 도달했을때 bfs알고리즘을 다시 순회하므로 비효율적임.
 * 따라서 땅에 석유그룹을 string으로 마킹하고, 몇덩이인지 값을 extractMap 객체에 key - value로 담음
 * 하지만 효율성 2, 3번 시간초과
 * 
 * key를 생성시에 Object.keys(extractMap).length + 1 + '' 코드는 O(N)의 복잡도를 가지기 떄문에 효율성이 좋지 못했음.
 * keyIdx값을 카운팅하며 key를 생성해주도록 변경. 
 */