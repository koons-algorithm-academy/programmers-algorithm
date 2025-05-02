function solution(points, routes) {
    var answer = 0;
    const pointsMap = {}
    points.forEach((el, idx) => {
        pointsMap[idx + 1] = el
    })
    const nextPoint = (cur, nextPoint) => {
        const [y, x] = cur
        const [nextY, nextX] = nextPoint
        const next = []
        if (y !== nextY) {
            if (y > nextY) {
                next.push(y - 1, x)
            } else {
                next.push(y + 1, x)
            }
        } else if (x !== nextX) {
            if (x > nextX) {
                next.push(y, x - 1)
            } else {
                next.push(y, x + 1)
            }
        }
        return next
    }
    const robots = {}
    let xyCount = {}
    const stack = [routes.map((_, idx) => idx + 1)]
    const moveRobots = (robotStack) => {
        const nextRobots = []
        robotStack.forEach((robotNum) => {
            if (!robots[robotNum]) {
                robots[robotNum] = pointsMap[routes[robotNum - 1][0]]
                routes[robotNum - 1].shift()
            }
            const [y, x] = robots[robotNum]
            xyCount[`${y}-${x}`] = xyCount[`${y}-${x}`] ? xyCount[`${y}-${x}`] + 1 : 1;
            if (routes[robotNum - 1].length) {
                const [nextY, nextX] = pointsMap[routes[robotNum - 1][0]]
                if (y === nextY && x === nextX) {
                    routes[robotNum - 1].shift()
                }

                const nextLocation = pointsMap[routes[robotNum - 1][0]]

                if (nextLocation) {
                    const next = nextPoint(robots[robotNum], nextLocation)
                    robots[robotNum] = next
                    nextRobots.push(robotNum)
                }
            }
        })
    
        if (nextRobots.length) {
            stack.push(nextRobots)
        }
        for (const key in xyCount) {
            if (xyCount[key] > 1) {
                answer++
            }
        }
        
    }

    while (stack.length) {
        xyCount = {}
        const robots = stack.shift()
        moveRobots(robots)
    }
    
    return answer;
}
