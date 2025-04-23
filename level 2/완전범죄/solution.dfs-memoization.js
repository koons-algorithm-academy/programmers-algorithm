function solution(info, n, m) {
    let minA = Number.MAX_SAFE_INTEGER
    const memo = {}
    const stealDfs = (index, aN, bM) => {
        const key = `${index}-${aN}-${bM}`
        if (memo[key]) return;
        if (index === info.length) {
            minA = Math.min(minA, aN)
            return
        }

        const [a, b] = info[index]

        if (n > (aN + a)) {
            stealDfs(index + 1, aN + a, bM)
        }
        if (m > (bM + b)) {
            stealDfs(index + 1, aN, bM + b)
        }
        
        memo[key] = true
    }
    stealDfs(0, 0, 0)
    return minA === Number.MAX_SAFE_INTEGER ? -1 : minA;
}

/**
 * 모든 물건의 훔쳤을때까지 탐색해야하므로 dfs를 선택함.
 * 처음에는 dfs만으로 해결하려 했으나 물건의 최대수가 40건이며 매건마다 두가지의 경우의 수가 생기기 때문에
 * 2^40 = 최대 1조이상 탐색하게됨 따라서 memoization을 추가로 사용함.
 * 메모방법 1: A가 선택한 index를 차례대로 기록해서 해결, 선택하지 않았다면 N으로 기록하여 탐색했을 경우는 pass
 *  쓸데없이 메모리를 많이 차지함.
 * 메모방법 2: index와 A의 누적 흔적 수만 기록하여 탐색했을 경우는 pass
 *  해당 index에서 B의 누적 흔적 수가 다를 경우가 생겨서 제대로된 값을 리턴받을 수 없음
 * 메모방법 3: index, A와 B의 누적 흔적 수를 함께 기록함.
 *  이렇게하면 앞에서 어떤물건을 누가 선택했든 상관없이 누적 흔적 수만 체크하면 되므로 dfs깊이가 현저히 줄어듬.
 */