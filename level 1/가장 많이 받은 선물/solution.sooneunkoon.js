function solution(friends, gifts) {
    const giftCountMap = {}
    let maxGiftCount = Number.MIN_SAFE_INTEGER
    friends.forEach((from, idx) => {
        for (let i = idx + 1; i < friends.length; i++) {
            const to = friends[i]
            giftCountMap[from] = giftCountMap[from] ?? { index: 0, sendMap: {}, receiveCount: 0 }
            giftCountMap[to] = giftCountMap[to] ?? { index: 0, sendMap: {}, receiveCount: 0 }
        }
    })
    gifts.forEach((el) => {
        const from = el.split(' ')[0]
        const to = el.split(' ')[1]
        giftCountMap[from].index++
        giftCountMap[to].index--
        giftCountMap[from].sendMap[to] = (giftCountMap[from].sendMap[to] ?? 1) + 1
    })
    for (const key in giftCountMap) {
        friends.forEach(el => {
            if (el !== key) {
                if (giftCountMap[key].sendMap[el] && giftCountMap[el].sendMap[key]) {
                    if (giftCountMap[key].sendMap[el] > giftCountMap[el].sendMap[key]) {
                        giftCountMap[key].receiveCount++
                    } else if (giftCountMap[key].sendMap[el] === giftCountMap[el].sendMap[key] && giftCountMap[key].index > giftCountMap[el].index) {
                        giftCountMap[key].receiveCount++
                    }     
                }
                if (giftCountMap[key].sendMap[el] && !giftCountMap[el].sendMap[key]) {
                    giftCountMap[key].receiveCount++
                }
                if (!giftCountMap[key].sendMap[el] && !giftCountMap[el].sendMap[key] && giftCountMap[key].index > giftCountMap[el].index) {
                    giftCountMap[key].receiveCount++
                }
                maxGiftCount = Math.max(maxGiftCount, giftCountMap[key].receiveCount)
            }
        })
    }

    return maxGiftCount;
}