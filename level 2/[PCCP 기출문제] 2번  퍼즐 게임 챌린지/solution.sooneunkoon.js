function solution(diffs, times, limit) {
    var answer = 0;
    for (let i = 1; i <= 100000; i++) {
        let solution = true
        let remainingTime = limit
        for (let j = 0; j < diffs.length; j++) {
            const diff = diffs[j]
            const time = times[j]
            if (i >= diff) {
                if (remainingTime >= time) {
                    remainingTime -= time
                } else {
                    solution = false
                    break
                }
            } else {
                const prevTime = times[j - 1] ? times[j - 1] : 0
                const solutionTime = (time + prevTime) * (diff - i) + time
                if (solutionTime > remainingTime) {
                    solution = false
                    break
                } else {
                    remainingTime -= solutionTime
                }
            }
        }
        if (solution) {
            answer = i
            break
        }
    }
    return answer;
}

/**
 * 시간초과로 테스트케이스 전부를 해결하지 못함
 */