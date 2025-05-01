function solution(diffs, times, limit) {
    var answer = 0;
    let minLev = 1
    let maxLev = [...diffs].sort((a, b) => b - a)[0]
    while (minLev <= maxLev) {
        const midLev = Math.floor((minLev + maxLev) / 2)
        if (solutionCheck(midLev, diffs, times, limit)) {
            answer = midLev
            maxLev = midLev - 1
        } else {
            minLev = midLev + 1
        }
    }
    
    return answer;
}

const solutionCheck = (lev, diffs, times, limit) => {
    let solution = true
    let remainingTime = limit
    for (let j = 0; j < diffs.length; j++) {
        const diff = diffs[j]
        const time = times[j]
        if (lev >= diff) {
            if (remainingTime >= time) {
                remainingTime -= time
            } else {
                solution = false
                break
            }
        } else {
            const prevTime = times[j - 1] ? times[j - 1] : 0
            const solutionTime = (time + prevTime) * (diff - lev) + time
            if (solutionTime > remainingTime) {
                solution = false
                break
            } else {
                remainingTime -= solutionTime
            }
        }
    }
    return solution
}

/**
 * 달걀 떨어뜨리기 문제와 동일하게 품
 * 테스트 15부터 런타임 오류가 발생함
 * Math.max는 인자가 100001이상 들어가게 되면 오류가 발생함.
 */