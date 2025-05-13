function solution(land) {
    var answer = 0;
    const xLength = land[0].length
    const yLength = land.length
    for (let x = 0; x < xLength; x++) {
        let extractCount = 0
        for (let y = 0; y < yLength; y++) {
            const cur = land[y][x]
            if (extractableCheck(cur, x)) {
                extractCount += extraction(land, x, [y, x])
            }
        }
        answer = Math.max(answer, extractCount)
    }
    return answer;
}

const extractableCheck = (cur, x) => {
    if (cur === 1 || (typeof cur === 'string' && cur !== String(x))) {
        return true
    }
    return false
}

const extraction = (land, x, start) => {
    const stringX = x + ''
    let result = 0;
    const maxX = land[0].length - 1
    const maxY = land.length - 1
    const moveX = [1, -1, 0, 0]
    const moveY = [0, 0, 1, -1]
    const queue = [start]
    while (queue.length) {
        const [y, x] = queue.shift()
        if (!extractableCheck(land[y][x], stringX)) {
            continue
        }
        result++
        land[y][x] = stringX
        for (let i = 0; i < moveX.length; i++) {
            const nextX = x + moveX[i]
            const nextY = y + moveY[i]
            if (nextX >= 0 && nextY >= 0 && nextX <= maxX && nextY <= maxY && extractableCheck(land[nextY][nextX], stringX)) {
                queue.push([nextY, nextX])
            }
        }
    }
    return result
}

/**
 * 정확성 100%
 * 효율성 테스트 통과하지 못함
 */