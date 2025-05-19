function solution(h1, m1, s1, h2, m2, s2) {
    var answer = 0;
    const hourDiff = (h2 - h1) * 3600
    const minuteDiff = (m2 - m1) * 60
    const secoundDiff = hourDiff + minuteDiff + (s2 - s1)
    let hourAngle = getHourAngle(h1, m1, s1)
    let minuteAngle = getMinuteAngle(m1, s1)
    let secoundAngle = getSecoundAngle(s1)
    
    let cnt = 0
    while (cnt < secoundDiff) {
        const [nextH, nextM, nextS] = nextTime(h1, m1, s1)
        h1 = nextH
        m1 = nextM
        s1 = nextS
        const nextHourAngle = getHourAngle(h1, m1, s1)
        const nextMinuteAngle = getMinuteAngle(m1, s1)
        const nextSecoundAngle = getSecoundAngle(s1)
        
        const result = isPassing(hourAngle, minuteAngle, secoundAngle, nextSecoundAngle)
        if (result) {
            answer++
        }

        hourAngle = nextHourAngle
        minuteAngle = nextMinuteAngle
        secoundAngle = nextSecoundAngle
        cnt++
    }

    return answer;
}

const nextTime = (h, m, s) => {
    s++
    if (s === 60) {
        s = 0
        m++
        if (m === 60) {
            m = 0
            h++
        }
    }
    return [h, m, s]
}

const isPassing = (hourAngle, minuteAngle, secoundAngle, nextSecoundAngle) => {
    if (secoundAngle > nextSecoundAngle) nextSecoundAngle += 360
    let result = false
    if (hourAngle >= secoundAngle && hourAngle < nextSecoundAngle) {
        result = true
    } else if (minuteAngle >= secoundAngle && minuteAngle < nextSecoundAngle) {
        result = true
    }
    return result
}

const getHourAngle = (hour, minute, secound) => {
    hour = (hour - 12) < 0 ? hour : hour - 12
    const hourAngle = 360 / 12 * hour
    const plusAngleByMinute = 360 / 12 / 60 * minute
    const plusAngleBySecound = 360 / 12 / 60 / 60 * secound
    return hourAngle + plusAngleByMinute + plusAngleBySecound
}

const getMinuteAngle = (minute, secound) => {
    const minuteAngle = 360 / 60 * minute
    const plusAngleBySecound = 360 / 60 / 60 * secound
    return minuteAngle + plusAngleBySecound
}

const getSecoundAngle = (secound) => {
    const secoundAngle = 360 / 60 * secound
    return secoundAngle
}

/**
 * 1. 목표하는 시간까지 초당 시침, 분침, 초침의 각도를 계산한다.
 * 2. 초침이 시침이나 분침을 지나쳤을때 알림이 울렸다고 간주한다.
 * 
 * 엣지케이스로 통과하지 못함.
 */