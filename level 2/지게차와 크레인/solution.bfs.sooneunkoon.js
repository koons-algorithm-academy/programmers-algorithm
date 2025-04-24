function failSolution(storage, requests) {
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
                    const pick = failPickBfs(clone, [y, x])
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

const failPickBfs = (storage, start) => {
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

function solution(storage, requests) {
    var answer = 0;
    const containerMap = {}
    for (let y = 0; y < storage.length; y++) {
        for (let x = 0; x < storage[y].length; x++) {
            const container = storage[y][x]
            containerMap[container] = containerMap[container] ? [...containerMap[container], [y, x]] : [[y, x]] 
        }
    }
    for (const request of requests) {
        const clone = [...storage]
        const type = request[0]
        if (request.length === 2) {
            containerMap[type]?.forEach(el => {
                const [y, x] = el
                const temp = storage[y].split('')
                temp[x] = ' '
                storage[y] = temp.join('')
            })
            containerMap[type] = []
            continue
        }
        if (!containerMap[type]) continue
        let idx = 0;
        const newArray = []
        containerMap[type].forEach(el => {
            const [y, x] = el
            const pick = pickBfs(clone, [y, x])
            if (pick) {
                const temp = storage[y].split('')
                temp[x] = ' '
                storage[y] = temp.join('')
            } else {
                newArray.push(el)
            }
        })
        containerMap[type] = newArray
    }
    
    for (const container in containerMap) {
        answer += containerMap[container].length
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
        if (storage[y][x] === true) continue
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
 * 이전 코드에도 bfs로직에 storage에 방문 여부를 찍어놓고는 있었지만 체크를 하지 않았음.
 * 방문 여부를 체크하고 방문하지 않았을 경우만 동서남북으로 이동해보는 방식으로 변경.
 */
