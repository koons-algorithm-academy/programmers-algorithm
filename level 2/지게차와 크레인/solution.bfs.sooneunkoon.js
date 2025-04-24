function solution(storage, requests) {
    var answer = 0;
    storage = storage.map(el => {
        return el.split('')
    })

    for (const request of requests) {
        if (request.length === 2) {
            const type = request[0]
            for (let y = 0; y < storage.length; y++) {
                const regexp = new RegExp(type, 'g')
                storage[y] = storage[y].join('').replace(regexp, ' ').split('')
            }
            continue
        }
        for (let y = 0; y < storage.length; y++) {
            for (let x = 0; x < storage[y].length; x++) {
                const cur = storage[y][x]
                if (request === cur) {
                    const pick = pickBfs(storage, [y, x])
                    if (pick) {
                        storage[y][x] = ' '
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
            if (nextX >= 0 && nextY >= 0 && nextX <= maxX && nextY <= maxY && storage[y][x] === ' ') {
                queue.push([nextY, nextX])
            }
        }
    }
}