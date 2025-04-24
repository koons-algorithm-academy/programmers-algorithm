function solution(storage, requests) {
    var answer = 0;
    for (const request of requests) {
        const clone = [...storage]
        if (request.length === 2) {
            const type = request[0]
            for (let y = 0; y < storage.length; y++) {
                const regexp = new RegExp(type, 'g')
                storage[y] = storage[y].replace(regexp, ' ')
            }
            continue
        }
        for (let y = 0; y < clone.length; y++) {
            for (let x = 0; x < clone[y].length; x++) {
                const cur = clone[y][x]
                if (request === cur) {
                    const pick = pickBfs(clone, [y, x])
                    if (pick) {
                        const temp = storage[y].split('')
                        temp[x] = ' '
                        storage[y] = temp.join('')
                    }
                }
            }
        }
    }

    for (let y = 0; y < storage.length; y++) {
        for (let x = 0; x < storage[y].length; x++) {
            if (storage[y][x] !== ' ') {
                answer++
            }
        }
    }
    
    return answer;
}

const pickBfs = (storage, start) => {
    storage = storage.map(el => {
        return el.split('')
    })
    const maxX = storage[0].length - 1
    const maxY = storage.length - 1

    const moveX = [-1, 1, 0, 0];
    const moveY = [0, 0, -1, 1];    
    const queue = [start]
    while (queue.length) {
        const [y, x] = queue.shift()
        if (x === 0 || x === maxX || y === 0 || y === maxY) return true
        storage[y][x] = true
        for (let i = 0; i < moveX.length; i++) {
            const nextX = x + moveX[i]
            const nextY = y + moveY[i]
            if (nextX >= 0 && nextY >= 0 && nextX <= maxX && nextY <= maxY && storage[nextY][nextX] === ' ') {
                queue.push([nextY, nextX])
            }
        }
    }
}

/**
 * 테스트 케이스 23, 24 시간초과
 * 최대 50행, 50열, 요청수 100개면 250,000회의 탐색이 발생할 수 있고, bfs까지 고려해야 하므로 시간초과가 남. 
 */