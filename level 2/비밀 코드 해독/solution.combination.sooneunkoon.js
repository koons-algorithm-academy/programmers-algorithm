function solution(n, q, ans) {
    var answer = 0;
    const nArr = new Array(n).fill(0).map((_, i) => i + 1)
    const combinations = getCombinations(nArr, 5)
    combinations.forEach(el => {
        const set = new Set(el)
        let isSecretCode = true
        for (let i = 0; i < q.length; i++) {
            const cur = q[i]
            const pairCount = cur.filter(el => set.has(el)).length;
            if (ans[i] !== pairCount) {
                isSecretCode = false
                break
            }
        }
        if (isSecretCode) {
            answer++
        }
    })
    return answer;
}

const getCombinations = (nArr, selectCount) => {
    const result = []
    if (selectCount === 1) return nArr.map(el => [el])
    
    nArr.forEach((el, idx, origin) => {
        const back = origin.slice(idx + 1)
        const combinations = getCombinations(back, selectCount - 1)
        const combi = combinations.map(combination => [el, ...combination])
        result.push(...combi)
    })
    
    return result
}

/**
 * 배열에 1부터 n까지 원소를 넣고
 * 해당 배열의 숫자조합(중복제외, 5개선택)을 만든다.
 * getCombination은 첫번째 재귀에서 배열을 순회하며 원소를 하나식 뽑고 선택수를 줄여나가며
 * 뽑은 원수의 뒤 원소들의 조합을 다시 만든다.
 * 순서대로 조합되므로 [5, 4, 3, 2, 1]같은 조합은 뽑지 않는다.
 */