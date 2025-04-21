function solution(n, w, num) {
    const targetFloor = Math.ceil(num / w)
    const targetIdx = targetFloor % 2 === 0 ? w - (w * targetFloor - num) - 1 : (w * targetFloor - num)
    const maxFloor = Math.ceil(n / w)
    const maxFloorBox = new Array(w).fill(null)
    for (let i = w * (maxFloor - 1) - 1; i <= n; i++) {
        const idx = maxFloor % 2 === 0 ? w - (w * maxFloor - i) - 1 : (w * maxFloor - i)
        maxFloorBox[idx] = i
    }
    
    return maxFloorBox[targetIdx] ? maxFloor - targetFloor + 1 : maxFloor - targetFloor
}

/**
 * 꺼낼 상자의 층과 최대 층의 상자는 순서가 어떤 순서로 택배가 쌓였는지 확인함.
 * 꺼낼상자의 index의 최대 층에는 상자가 쌓여있는지 없는지 판단해서 정답을 리턴함.
 */