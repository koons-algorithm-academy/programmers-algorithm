function solution(video_len, pos, op_start, op_end, commands) {
    pos = openingTimeCheck(pos, op_start, op_end)
    for (let i = 0; i < commands.length; i++) {
        const direction = commands[i]
        if (direction === 'prev') {
            pos = movePrevTime(pos)
        } else {
            pos = moveNextTime(pos)
            if (pos > video_len) {
                pos = video_len
            }
        }
        pos = openingTimeCheck(pos, op_start, op_end)
    }
    return pos;
}
const openingTimeCheck = (pos, op_start, op_end) => {
    if (op_start <= pos && op_end >= pos) {
        return op_end
    }
    return pos
}

const movePrevTime = (time) => {
    let minute = +time.split(':')[0]
    let secound = +time.split(':')[1]
    if (secound - 10 < 0) {
        if (minute - 1 < 0) {
            minute = 0
            secound = 0
        } else {
            minute -= 1
            secound = 60 + secound - 10  
        }

    } else {
        secound -= 10
    }
    return `${minute < 10 ? '0' + minute : minute}:${secound < 10 ? '0' + secound : secound}`
}

const moveNextTime = (time) => {
    let minute = +time.split(':')[0]
    let secound = +time.split(':')[1]
    if (secound + 10 >= 60) {
        minute += 1
        secound = (secound + 10) % 60
    } else {
        secound += 10
    }
    return `${minute < 10 ? '0' + minute : minute}:${secound < 10 ? '0' + secound : secound}`
}