function solution(park, routes) {
    var answer = [];
    const maxX = park[0].length - 1
    const maxY = park.length - 1
    const directionMap = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] }
    for (let i = 0; i < park.length; i++) {
        const startIdx = park[i].indexOf('S')
        if (startIdx >= 0) {
            answer.push(i, startIdx)
            break
        }
    }

    routes.forEach(el => {
        const x = answer[1]
        const y = answer[0]
        const direction = el.split(' ')[0]
        const step = +el.split(' ')[1]
        let posible = true
        const [stepY, stepX] = directionMap[direction]
        for (let n = 1; n <= step; n++) {
            const nextX = x + (n * stepX)
            const nextY = y + (n * stepY)
            if (nextX < 0 || nextX > maxX || nextY < 0 || nextY > maxY || !park[nextY][nextX] || park[nextY][nextX] === 'X') {
                posible = false
                break
            }
        }
        if (posible) {
            answer[1] = x + (step * stepX)
            answer[0] = y + (step * stepY)
        }
    })

    return answer;
}